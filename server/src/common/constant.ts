const RESPONSE_MESSAGES = {
  REQUEST_ERROR: 'Invalid/Incomplete request format.',
  REQUEST_ERROR_DESCRIPTION:
    'Your request was either malformed or not in the required format.',
  NAME_ERROR: 'Invalid Name format.',
  NAME_ERROR_DESCRIPTION:
    'Name is required and can only have alphabets with a minimum length of 3.',
  EMAIL_ERROR: 'Invalid Email format.',
  EMAIL_ERROR_DESCRIPTION: 'Email is required and must be of proper format.',
  PASSWORD_ERROR: 'Invalid Password format.',
  PASSWORD_ERROR_DESCRIPTION:
    'Password is required and must contain at least 1 letter, 1 number, 1 special character and must be minimum of 8 characters.',
};

export default RESPONSE_MESSAGES;
