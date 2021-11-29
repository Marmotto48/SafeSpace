const { check, validationResult } = require("express-validator");

exports.registerValidate = () => [
  check("fullname", "Fullname is required.").notEmpty(),
  check("email", "Email is required.").isEmail(),
  check("password", "Password is required.").notEmpty(),
  check("password", "Please enter a valid password.")
    .isLength({ min: 6 })
    .withMessage("Password must contain at least 6 characters long.")
    .matches(/\d/)
    .withMessage("Password must contain at least one number."),
];

exports.loginValidate = () => [
  check("email", "Invalid email, please check again.").isEmail(),
  check("password", "enter a valid password").isLength({ min: 6 }),
];

exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errors: errors.array().map((el) => ({ msg: el.msg })) });
  }
  next();
};