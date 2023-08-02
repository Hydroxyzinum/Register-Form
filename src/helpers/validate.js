export const checkPassword = (password) => {
  const passwordRagex =
    /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g;
  return passwordRagex.test(password);
};

export const checkEmail = (email) => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
};

export const checkName = (name) => {
  const nameRegex = /^[A-Za-zА-Яа-яЁё\s-]+$/;
  return nameRegex.test(name);
};

export const checkPhoneNumber = (phoneNumber) => {
  const phoneRegex = /^\+?[0-9]{1,3}-?[0-9]{3,14}$/;
  return phoneRegex.test(phoneNumber);
};

export const checkDate = (date) => {
  const newDate = new Date(date);
  console.log(newDate);
};

export const finalValidation = (arr, dispatch) => {
  dispatch({ type: "VALIDATE_NAME" });
  dispatch({ type: "VALIDATE_SURNAME" });
  dispatch({ type: "VALIDATE_EMAIL" });
  dispatch({ type: "VALIDATE_PASSWORD" });
  dispatch({ type: "VALIDATE_TEL" });
  arr.includes(false || 'begin')
    ? dispatch({ type: "SET_VALIDATE", payload: false })
    : dispatch({ type: "SET_VALIDATE", payload: true });
};
