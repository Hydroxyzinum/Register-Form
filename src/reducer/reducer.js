import {
  checkName,
  checkEmail,
  checkPassword,
  checkPhoneNumber,
} from "../helpers/validate";

const initialState = {
  name: "",
  surname: "",
  email: "",
  password: "",
  tel: "",
  dof: "",
  data: {},
  validateName: "begin",
  validateSurname: "begin",
  validateEmail: "begin",
  validatePassword: "begin",
  validatePhone: "begin",
  validateLicense: "begin",
  validateRules: "begin",
  validate: false,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_NAME":
      return {
        ...state,
        name: payload,
      };
    case "SET_SURNAME":
      return {
        ...state,
        surname: payload,
      };
    case "SET_EMAIL":
      return {
        ...state,
        email: payload,
      };
    case "SET_PASSWORD":
      return {
        ...state,
        password: payload,
      };
    case "SET_TEL":
      return {
        ...state,
        tel: payload,
      };
    case "SET_DOF":
      return {
        ...state,
        dof: payload,
      };
    case "VALIDATE_NAME":
      return {
        ...state,
        validateName: checkName(state.name),
      };
    case "VALIDATE_SURNAME":
      return {
        ...state,
        validateSurname: checkName(state.surname),
      };
    case "VALIDATE_EMAIL":
      return {
        ...state,
        validateEmail: checkEmail(state.email),
      };
    case "VALIDATE_PASSWORD":
      return {
        ...state,
        validatePassword: checkPassword(state.password),
      };
    case "VALIDATE_TEL":
      return {
        ...state,
        validatePhone: checkPhoneNumber(state.tel),
      };

    case "SET_VALIDATE":
      return {
        ...state,
        validate: payload,
      };
    case "VALIDATE_LICENSE":
      return {
        ...state,
        validateLicense: payload,
      };
    case "VALIDATE_RULES":
      return {
        ...state,
        validateRules: payload,
      };
    default:
      return state;
  }
};

export { initialState, reducer };
