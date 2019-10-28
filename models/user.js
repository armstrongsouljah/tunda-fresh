const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../database/db');

class User extends Sequelize.Model {}
User.init({
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
      max: 569,
    },
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    max: 199,
    allowNull: false,
  },

}, {
  sequelize,
  modelName: 'user',
  hooks: {
    beforeCreate: (user) => {
      // eslint-disable-next-line no-param-reassign
      user.password = bcrypt.hashSync(user.password, 8);
    },
  },
});

module.exports = User;
