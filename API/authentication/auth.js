const jwt = require("jsonwebtoken");
require("dotenv").config();

const secretKey = process.env.SECRET_KEY;

// generating the token
exports.generateToken = (user) => {
  return jwt.sign({ user }, secretKey, { expiresIn: "1h" });
};

exports.verifyToken = (req, res, next) => {
  try {
    // splitting the bearer token
    const token = req.headers.authorization.split(" ")[1];
    req.userData = jwt.verify(token, secretKey);
    next();
  } catch {
    return res.status(401).json({
      statusCode: 401,
      status: false,
      message: "Access denied. Please login.",
    });
  }
};
