const router = require("express").Router();
const orderModel = require("../models/orders/orderModel");
// const auth = require("../authentication/auth");

// router.use(auth.verifyToken);

router.post("/", orderModel.createOrder);
router.get("/:userId", orderModel.getOrders);
router.get("/orderdetails/:id", orderModel.getOneOrder);
router.get("/", orderModel.getAllOrders);
router.patch("/:id", orderModel.updateOrder);
router.delete("/:id", orderModel.deleteOrder);

module.exports = router;
