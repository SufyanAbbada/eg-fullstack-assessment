export const validateName = (name) => {
  if (
    name !== undefined &&
    name.trim().length > 3 &&
    /^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/.test(name.trim())
  ) {
    return true;
  } else return false;
};

export const validateEmail = (email) => {
  if (
    email !== undefined &&
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
  ) {
    return true;
  } else return false;
};

export const validatePassword = (password) => {
  if (
    password !== undefined &&
    password.length > 8 &&
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(password)
  ) {
    return true;
  } else return false;
};
