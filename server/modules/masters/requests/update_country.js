/**
 *  update country request schema
 */

const Joi = require("joi");

const schema = Joi.object().keys({
  id: Joi.number().required(),
  name: Joi.string().required(),
  code: Joi.string().required(),
  allow_from: Joi.boolean().required(),
  allow_to: Joi.boolean().required()
});

module.exports = {
  body: schema
};
