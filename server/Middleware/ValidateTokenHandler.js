const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      statusCode: 1003,
      message: "Token missing or invalid",
      data: {},
    });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        statusCode: 1003,
        message: "Token expired or unauthorized",
        data: {},
      });
    }

    req.user = decoded;
    next();
  });
};

module.exports = validateToken;