const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  orderItems: { type: Array, required: true },
  orderTotal: { type: Number, required: true },
  orderUserId: { type: String, required: true },
  orderComplete: { type: Boolean, required: true, default: false },
  
  created: { type: Date, default: Date.now },
  modified: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
