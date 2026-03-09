const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const conn = mysql.createConnection({
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_name
});

const testEmail = "aaa@gmail.com"; // Change this to your test email
const testPass = "123456";      // Change this to your test password

conn.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err.message);
        process.exit(1);
    }
    console.log("Database Connected. Testing login logic for:", testEmail);

    conn.query(
        "SELECT * FROM users WHERE Email = ?",
        [testEmail],
        async (err, results) => {
            if (err) {
                console.error("Query error:", err.message);
                conn.end();
                return;
            }

            if (results.length === 0) {
                console.log("No user found with email:", testEmail);
                console.log("Existing users in DB:");
                conn.query("SELECT Name, Email, role FROM users", (err2, users) => {
                    console.table(users);
                    conn.end();
                });
                return;
            }

            const user = results[0];
            console.log("User found in DB:", { Name: user.Name, Email: user.Email, role: user.role });
            console.log("Stored Password (from DB):", user.password);

            try {
                const isMatch = await bcrypt.compare(testPass, user.password);
                console.log("Bcrypt Match:", isMatch);

                if (!isMatch && testPass === user.password) {
                    console.log("Logic Check: Plain-text password matches stored string.");
                } else if (!isMatch) {
                    console.log("Logic Check: Password does NOT match stored value.");
                }
            } catch (e) {
                console.error("Bcrypt Error:", e.message);
            }

            conn.end();
        }
    );
});
