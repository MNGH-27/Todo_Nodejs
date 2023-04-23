const jwt = require("jsonwebtoken");

// JWT middleware function to verify the token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1].trim();

  if (!token) {
    return res.status(401).json({ message: "token is wrong" });
  }
  try {
    //decoding token which is sent
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //there was no problem in decoding token => add to user in request
    req.user = decoded;
    //go to next middle ware
    next();
  } catch (error) {
    //there was error while decoding token => send status 403 as unAuthorized
    return res.status(403).json({ message: "Invalid token" });
  }
};

// Middleware function to conditionally skip JWT check for specific routes
const JWTCheck = (req, res, next) => {
  //check route that we don't want jwt in it
  if (
    req.originalUrl === "/v1/auth/signup" ||
    req.originalUrl === "/v1/auth/login"
  ) {
    //skip checking jwt token
    return next();
  }

  //checking jwt
  return verifyToken(req, res, next);
};

module.exports = JWTCheck;
