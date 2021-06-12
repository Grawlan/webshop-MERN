const router = require("express").Router();
const orderModel = require("../models/orders/orderModel");
const auth = require("../authentication/auth");

// router.use(auth.verifyToken);

router.post("/", orderModel.createOrder);
router.get("/:userId", orderModel.getOrders);

module.exports = router;
