const express = require("express");
const controlUser = require("../controller/UserCtrl");
const router = express.Router();
const authenticateToken = require("../middleware/auth");

// Unified Login Route (Used by both admin and user)
router.post("/login", controlUser.login);

// Maintenance routes (redirect to the new unified login)
router.post("/userlogin", controlUser.login);
router.post("/loginadmin", controlUser.login);

// User Management
router.post("/AddUser", controlUser.AddUser);
router.get("/users", controlUser.getUsers);
router.delete("/users/:id", controlUser.deleteUser);
router.put("/users/:id", controlUser.updateUser);

// Order Management
router.post("/place-order", controlUser.placeOrder);
router.get("/user-orders/:userId", controlUser.getUserOrders);
router.get("/orders", controlUser.getAllOrders);
router.put("/orders/delete/:id", controlUser.deleteOrder);
router.put("/orders/update/:id", controlUser.updateOrder);

module.exports = router;
