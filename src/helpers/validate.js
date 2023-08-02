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
  console.log(newDate)
}


