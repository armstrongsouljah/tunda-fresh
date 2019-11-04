/* eslint-disable consistent-return */
const authValidators = require('../validators/auth.validators');
const User = require('../models/user');

exports.registerUser = (req, res) => {
  const { error } = authValidators.validateSignupData(req.body);
  if (error) return res.status(400).json(error);
  const { email, password } = req.body;

  return User.create({ email, password })
    .then((created) => {
      res.status(201).json({ created });
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
};
