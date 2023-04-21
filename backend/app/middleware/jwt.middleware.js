// JWT middleware function to verify the token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "توکن داده شده درست نیست" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
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
