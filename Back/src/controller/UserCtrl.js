const UserModel = require("../models/UserModel.js");
const bcrypt = require("bcryptjs"); // Switched to bcryptjs for better stability
const jwt = require("jsonwebtoken");
require('dotenv').config();

// Consolidated Login for both User and Admin
exports.login = async (req, res) => {
  //console.log("--- LOGIN ATTEMPT ---");
 // console.log("Body Received:", req.body);

  const { Email, password } = req.body;

  if (!Email || !password) {
    console.log("Error: Missing Email or Password");
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const trimmedEmail = Email.trim();
    console.log("Searching user with email:", trimmedEmail);

    const users = await UserModel.findUserByEmail(trimmedEmail);

    if (!users || users.length === 0) {
      console.log("Error: No user found with email:", trimmedEmail);
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const user = users[0];
    console.log("User Found:", { id: user.id, Email: user.Email, role: user.role });
    console.log("Stored Password (from DB):", user.password);

    // Compare password
    // logic: check if bcrypt matches, OR check if plain text matches (to support old users)
    let isPasswordValid = false;
    try {
      isPasswordValid = await bcrypt.compare(password, user.password);
    } catch (bcryptErr) {
      console.log("Bcrypt comparison failed, checking plain text...");
    }

    if (!isPasswordValid && password === user.password) {
      console.log("Plain text password match detected.");
      isPasswordValid = true;
    }

    if (!isPasswordValid) {
      console.log("Error: Password mismatch for user:", trimmedEmail);
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate Token
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET || "jwtkey",
      { expiresIn: process.env.JWT_EXPIRES || "24h" }
    );

    console.log("Login Successful! Generating Token...");

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        Name: user.Name,
        Email: user.Email,
        role: user.role
      },
      token
    });
  } catch (err) {
    console.error("CRITICAL LOGIN ERROR:", err);
    res.status(500).json({ message: "Internal server error", error: err.message });
  }
};

// Aliases for compatibility
exports.loginadmin = (req, res) => exports.login(req, res);
exports.loginuser = (req, res) => exports.login(req, res);

// Add User
exports.AddUser = async (req, res) => {
  console.log("--- ADD USER ATTEMPT ---");
  try {
    const { Name, Email, password, Date, role } = req.body;
    if (!Name || !Email || !password || !Date || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    console.log("Hashing password for new user:", Email);
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await UserModel.AddUser(Name, Email, hashedPassword, Date, role);
    console.log("User added successfully:", Email);
    res.status(200).json({ message: "User added successfully", user: result });
  } catch (err) {
    console.error("ADD USER ERROR:", err);
    res.status(500).json({ message: "Error adding user", error: err.message });
  }
};

exports.getUsers = (req, res) => {
  UserModel.getAllUsers()
    .then(users => res.json(users))
    .catch(err => res.status(500).json({ error: "Failed to fetch users" }));
};

exports.deleteUser = (req, res) => {
  const user_id = req.params.id;
  UserModel.DeleteUser(user_id)
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err));
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { Name, Email, password } = req.body;
    const result = await UserModel.updateUser(id, { Name, Email, password });
    res.json({ message: "User updated successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to update user" });
  }
};

exports.placeOrder = (req, res) => {
  const { user_id, product_id, address, contact, payment_method } = req.body;
  UserModel.createOrder(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Order placed successfully", orderId: result.insertId });
  });
};

exports.getUserOrders = (req, res) => {
  const { userId } = req.params;
  UserModel.getOrdersByUser(userId, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await UserModel.getAllOrders();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Database error" });
  }
};

exports.deleteOrder = (req, res) => {
  const id = req.params.id;
  UserModel.deleteById(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Order deleted successfully" });
  });
};

exports.updateOrder = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  UserModel.updateById(id, data, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Order updated successfully" });
  });
};
