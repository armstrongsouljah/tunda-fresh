/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const sequelize = require('./database/db');
const authRoutes = require('./routes/auth.route');

const { port } = process.env || 8081;
const app = express();
app.use(bodyParser.json());
app.use('/auth/', authRoutes);

sequelize.sync({ force: true })
  .then(() => {
    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log('server running at', port);
    });
  })
  .catch((error) => {
    console.error(error);
  });
