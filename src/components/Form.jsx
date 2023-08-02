import React, { useEffect, useReducer } from "react";
import { initialState, reducer } from "../reducer/reducer";
import { checkDate } from "../helpers/validate";
import { loremIpsum } from "../helpers/loremIpsum";
import {
  inputClassGenerator,
  checkboxClassGenerator,
} from "../helpers/generators";
import { finalValidation } from "../helpers/validate";

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    name,
    surname,
    email,
    password,
    tel,
    dof,
    validateName,
    validateSurname,
    validateEmail,
    validatePassword,
    validatePhone,
    validateLicense,
    validateRules,
    validate,
  } = state;

  const submitForm = (e) => {
    e.preventDefault();
    const formValidate = [
      validateName,
      validateSurname,
      validateEmail,
      validatePassword,
      validatePhone,
      validateLicense,
      validateRules,
    ];
    finalValidation(formValidate, dispatch);
  };

  const onChangeFunc = (type, validateType, value) => {
    dispatch({ type: type, payload: value });
    dispatch({ type: validateType });
  };

  useEffect(() => {
    if (validate) {
      console.log("ПЕРЕАДРЕСАЦИЯ");
    }
  }, [validate]);

  return (
    <div className="form-container">
      <div className="form">
        <h1 className="head">Register Form</h1>
        <form onSubmit={submitForm} className="register-form">
          <label className="sr-only" htmlFor="name">
            Name
          </label>
          <input
            onChange={(e) => {
              onChangeFunc("SET_NAME", "VALIDATE_NAME", e.target.value);
            }}
            value={name.replace(/\d/g, "")}
            className={inputClassGenerator(validateName)}
            maxLength={20}
            id="name"
            type="text"
            placeholder="Имя"
          />
          <label className="sr-only" htmlFor="surname">
            Surname
          </label>
          <input
            onChange={(e) => {
              onChangeFunc("SET_SURNAME", "VALIDATE_SURNAME", e.target.value);
            }}
            value={surname.replace(/\d/g, "")}
            className={inputClassGenerator(validateSurname)}
            maxLength={30}
            id="surname"
            type="text"
            placeholder="Фамилия"
          />
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input
            onChange={(e) => {
              onChangeFunc("SET_EMAIL", "VALIDATE_EMAIL", e.target.value);
            }}
            value={email}
            className={inputClassGenerator(validateEmail)}
            maxLength={40}
            id="email"
            type="email"
            placeholder="Электронная почта"
          />

          <div className="tooltip-container">
            <label className="sr-only" htmlFor="password">
              Password
            </label>
            <input
              onChange={(e) => {
                onChangeFunc(
                  "SET_PASSWORD",
                  "VALIDATE_PASSWORD",
                  e.target.value
                );
              }}
              value={password}
              className={inputClassGenerator(validatePassword)}
              maxLength={15}
              id="password"
              type="password"
              placeholder="Пароль"
            />
            <div className="tooltip-content">
              Пароль должен содержать хотя бы одну цифру, одну строчную и одну
              прописную букву, а также хотя бы один из специальных символов: ! @
              # $ % ^ & *. <br /> Длина пароля должна быть не менее 8 символов.
            </div>
          </div>

          <label className="sr-only" htmlFor="tel">
            Tel Number
          </label>
          <input
            onChange={(e) => {
              onChangeFunc("SET_TEL", "VALIDATE_TEL", e.target.value);
            }}
            value={tel.replace(/[A-Za-zА-Яа-яЁё]/, "")}
            className={inputClassGenerator(validatePhone)}
            maxLength={25}
            id="tel"
            type="tel"
            placeholder="Номер телефона"
          />
          <div className="day-of_birthday">
            <label className="sr-only" htmlFor="date">
              Day of Birthday
            </label>
            <input
              onChange={(e) =>
                dispatch({ type: "SET_DOF", payload: e.target.value })
              }
              id="date"
              type="date"
            />
            <span className="dof-span">Дата рождения:</span>
          </div>
          <div className="license-container">
            <div className="license-item">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? dispatch({ type: "VALIDATE_LICENSE", payload: true })
                    : dispatch({ type: "VALIDATE_LICENSE", payload: false })
                }
                className="check-license"
                type="checkbox"
              />
              <span className={checkboxClassGenerator(validateLicense)}>
                Согласен с правилами пользования [Имя ресурса] [Правила
                пользования]
              </span>
              <div className="license-text">
                <ol>
                  {loremIpsum.map((item, index) => {
                    return <li key={index}>{item.text}</li>;
                  })}
                </ol>
              </div>
            </div>
            <div className="license-item">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? dispatch({ type: "VALIDATE_RULES", payload: true })
                    : dispatch({ type: "VALIDATE_RULES", payload: false })
                }
                className="check-license"
                type="checkbox"
              />

              <span className={checkboxClassGenerator(validateRules)}>
                Согласен на обработку данных
              </span>
            </div>
          </div>
          <div className="submit-container">
            <input
              style={{
                color: validate ? "transparent" : "white",
                background: validate ? "green" : "#0575E6",
              }}
              className="submit-btn"
              type="submit"
            />
            <div className={validate ? "spinner" : "spinner-none"}></div>
            <div className="checkmark-container">
              <input type="checkbox" id="checkbox" className="checkbox" />
              <label htmlFor="checkbox" className="checkmark"></label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
