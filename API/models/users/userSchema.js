const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  admin: { type: Boolean, default: false },

  created: { type: Date, default: Date.now },
  modified: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
