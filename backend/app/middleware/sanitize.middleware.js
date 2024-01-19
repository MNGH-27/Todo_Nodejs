const validator = require("validator");

// Define middleware to sanitize user input
const sanitizeInput = (req, res, next) => {
  //destruct body from request
  const { body } = req;

  for (const key in body) {
    if (typeof body[key] === "string") {
      //check and valudate value of body
      body[key] = validator.escape(body[key]);
    }
  }

  next();
};

module.exports = sanitizeInput;
