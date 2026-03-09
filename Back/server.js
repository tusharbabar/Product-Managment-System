const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Create connection
const db = mysql.createConnection({
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_name
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err.stack);
        return;
    }
    console.log("Connected to database.");
});

const app = express();

// Log all requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Models helper (Internal for this test server)
const findUserByEmail = (Email) => {
    return new Promise((resolve, reject) => {
        db.query(
            "SELECT id, Name, Email, password, role FROM users WHERE Email = ?",
            [Email],
            (err, results) => {
                if (err) reject(err);
                else resolve(results);
            }
        );
    });
};

// Unified Login Route
app.post("/login", async (req, res) => {
    console.log("Login hit:", req.body);
    const { Email, password } = req.body;

    if (!Email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    try {
        const trimmedEmail = Email.trim();
        const users = await findUserByEmail(trimmedEmail);

        if (!users || users.length === 0) {
            return res.status(401).json({ message: "Invalid Email or password" });
        }

        const user = users[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid Email or password" });
        }

        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET || "jwtkey",
            { expiresIn: process.env.JWT_EXPIRES || "1h" }
        );

        res.status(200).json({
            message: "Login successful",
            user: { id: user.id, Name: user.Name, Email: user.Email, role: user.role },
            token,
        });
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Import other routes if needed
const UserRoute = require("./src/route/UserRoute");
const ProdRoute = require("./src/route/ProdRoute");
const CategoryRoute = require("./src/route/CategoryRoute");

app.use("/", UserRoute);
app.use("/", ProdRoute);
app.use("/", CategoryRoute);

const port = process.env.db_server || 3000;
app.listen(port, () => {
    console.log(`Unified Server running on http://localhost:${port}`);
});
