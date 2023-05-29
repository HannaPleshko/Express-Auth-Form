const ExceptionType = {
  USER_AUTH_NOT_FOUND: { id: 1, message: 'User with this email not found.' },
  USER_AUTH_ALREADY_EXISTS: { id: 2, message: 'User with this email already exists.' },
  USER_AUTH_INVALID_PASSWORD: { id: 3, message: 'Incorrect user data for the password.' },
};

const SuccessType = {
  USER_REGISTRATION_SUCCESS: { id: 1, message: 'Registration User: Completed successfully.' },
  USER_AUTHORIZATION_SUCCESS: { id: 2, message: 'Authorization User: Completed successfully.' },
};

module.exports = { ExceptionType, SuccessType };
