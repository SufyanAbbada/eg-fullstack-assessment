const RESPONSE_MESSAGES = {
  REQUEST_ERROR: 'Invalid/Incomplete request format.',
  REQUEST_ERROR_DESCRIPTION:
    'Your request was either malformed or not in the required format.',
  NAME_ERROR: 'Invalid Name format.',
  NAME_ERROR_DESCRIPTION:
    'Name is required and can only have alphabets with a minimum length of 3.',
  EMAIL_ERROR: 'Invalid Email format.',
  EMAIL_ERROR_DESCRIPTION: 'Email is required and must be of proper format.',
  EMAIL_ALREADY_PRESENT_ERROR: 'Email already exists',
  EMAIL_ALREADY_PRESENT_ERROR_DESCRIPTION:
    'The provided Email is already in use. Please use another Email',
  PASSWORD_ERROR: 'Invalid Password format.',
  PASSWORD_ERROR_DESCRIPTION:
    'Password is required and must contain at least 1 letter, 1 number, 1 special character and must be minimum of 8 characters.',
};

const APP_CONSTANTS = {
  SALT_ROUNDS: 10,
  TIME_TO_LIVE: 60 * 60 * 10, // 10 minutes
  NUMBER_OF_ATTEMPTS: 5,
  MINIMUM_NAME_LENGTH: 2,
  MINIMUM_PASSWORD_LENGTH: 8,
  HASHED_PASSWORD_LENGTH: 60,
};
export { RESPONSE_MESSAGES as default, APP_CONSTANTS };
