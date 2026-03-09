const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const UserRoute = require("./route/UserRoute");
const ProdRoute = require("./route/ProdRoute");
const CategoryRoute = require("./route/CategoryRoute");

const app = express();

// Standard Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve Static Files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// View engine
app.set("view engine", "ejs");

// Log requests for debugging
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Primary Routes
app.use("/", UserRoute);
app.use("/", ProdRoute);
app.use("/", CategoryRoute);

// Simple Health Check
app.get("/health", (req, res) => res.status(200).send("Server is up and running"));

module.exports = app;
