const express = require('express');
const { registerUser, authorizeUser } = require('../service/user.service');
const { SuccessType } = require('../exceptions/exceptions.type');
const { buildResponse } = require('../helper/response');

const route = express.Router();

route.post('/register', async (req, res, next) => {
  try {
    await registerUser(req.body);
    buildResponse(res, 201, SuccessType.USER_REGISTRATION_SUCCESS);
  } catch (error) {
    next(error);
  }
});
route.post('/authorize', async (req, res, next) => {
  try {
    await authorizeUser(req.body);
    buildResponse(res, 200, SuccessType.USER_AUTHORIZATION_SUCCESS);
  } catch (error) {
    next(error);
  }
});

module.exports = route;
