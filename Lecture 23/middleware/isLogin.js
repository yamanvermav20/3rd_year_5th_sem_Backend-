const jwt = require("jsonwebtoken");

const isLogin = (req, res, next) => {
  try {
    let token = req.headers.authorization; 

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access denied. No token provided"
      });
    }

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    const decoded = jwt.verify(token, "SECRET_KEY"); 
    req.user = { id: decoded.id };  

    next(); 
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

module.exports = isLogin;