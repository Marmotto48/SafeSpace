const joi = require("joi");
const registerValidation = (data) => {
  //User Register Schema
  const UserRegister = joi
    .object({
      fullname: joi.string().max(80).required(),
      email: joi.string().required().email(),
      password: joi
        .string()
        .min(8)
        .required()
        .pattern(new RegExp("^[a-zA-Z0-9]+$")),
    })
    .options({ allowUnknown: true }); // allow other info
  // .options({ stripUnknown: true });

  return UserRegister.validate(data);
};

const loginValidation = (data) => {
  //User Register Schema
  const UserLogin = joi.object({
    email: joi.string().email().required(),
    password: joi
      .string()
      .min(8)
      .required()
      .pattern(new RegExp("^[a-zA-Z0-9]+$")),
  });

  return UserLogin.validate(data);
};

exports.registerValidation = registerValidation;
exports.loginValidation = loginValidation;
