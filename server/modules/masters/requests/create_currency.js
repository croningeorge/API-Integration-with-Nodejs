/**
 *  create currency request schema
 */

const Joi = require("joi");

const schema = Joi.object().keys({
  name: Joi.string().required(),
  code: Joi.string().required(),
  country_id: Joi.number().required()
});

module.exports = {
  body: schema
};
