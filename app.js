/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const sequelize = require('./database/db');

const { port } = 8081 || process.env;
const app = express();
app.use(bodyParser.json());

sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log('server running');
    });
  })
  .catch((error) => {
    console.error(error);
  });
