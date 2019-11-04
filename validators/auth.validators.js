const Joi = require('@hapi/joi');

const signupSchema = Joi.object({
  email: Joi.string().email().max(254).required(),
  password: Joi.string().alphanum().min(6).max(899)
    .required(),
});

exports.validateSignupData = (data) => signupSchema.validate(data);
