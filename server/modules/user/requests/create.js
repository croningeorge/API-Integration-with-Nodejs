const Joi = require("joi");

const schema = Joi.object().keys({
  name: Joi.string().required(),
  password: Joi.string()
    .regex(/^[a-zA-Z0-9]{3,30}$/)
    .required(),
  email: Joi.string()
    .email()
    .required()
});

module.exports = {
  body: schema
};
