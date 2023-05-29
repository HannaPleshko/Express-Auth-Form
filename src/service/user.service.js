const { ExceptionType } = require('../exceptions/exceptions.type');
const HttpException = require('../exceptions/HttpException');
const { readFileSync, writeFileSync } = require('fs');
const { hash, compare } = require('bcrypt');
const uuid = require('uuid');

const path = './storage/storage.json';

async function registerUser(user) {
  const storage = JSON.parse(readFileSync(path));

  const found = storage.find(el => el.email === user.email) ?? null;
  if (found) throw new HttpException(400, ExceptionType.USER_AUTH_ALREADY_EXISTS);

  const hashed = await hash(user.pwd, 10);

  storage.push({ id: uuid.v1(), ...user, pwd: hashed });
  writeFileSync(path, JSON.stringify(storage));
}
async function authorizeUser(user) {
  const storage = JSON.parse(readFileSync(path));

  const found = storage.find(el => el.email === user.email) ?? null;
  if (!found) throw new HttpException(404, ExceptionType.USER_AUTH_NOT_FOUND);

  if (!(await compare(user.pwd, found.pwd))) throw new HttpException(400, ExceptionType.USER_AUTH_INVALID_PASSWORD);
}

module.exports = { registerUser, authorizeUser };
