const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const user = require('./controller/user.controller');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', user);

app.use((error, req, res, _next) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';
  const id = error.id || 0;

  res.status(status).send({ id, message });
});

module.exports = app;
