import React, { useEffect, useReducer } from "react";
import { initialState, reducer } from "./reducer/reducer";
import { checkDate } from "./helpers/validate";
import { loremIpsum } from "./helpers/loremIpsum";
import cn from "classnames";

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
    dispatch({ type: "VALIDATE_NAME" });
    dispatch({ type: "VALIDATE_SURNAME" });
    dispatch({ type: "VALIDATE_EMAIL" });
    dispatch({ type: "VALIDATE_PASSWORD" });
    dispatch({ type: "VALIDATE_TEL" });
    if (
      validateName === true &&
      validateSurname === true &&
      validateEmail === true &&
      validatePassword === true &&
      validatePhone === true &&
      validateLicense === true &&
      validateRules === true
    ) {
      return dispatch({ type: "SET_VALIDATE", payload: true });
    }
  };

  useEffect(() => {
    if (validate) {
      console.log("ПЕРЕАДРЕСАЦИЯ");
    }
  }, [validate]);

  const nameClasses = cn("form-input", {
    "": validateName === "begin",
    "red-border": validateName === false,
    "green-border": validateName === true,
  });

  const surnameClasses = cn("form-input", {
    "": validateSurname === "begin",
    "red-border": validateSurname === false,
    "green-border": validateSurname === true,
  });

  const emailClasses = cn("form-input", {
    "": validateEmail === "begin",
    "red-border": validateEmail === false,
    "green-border": validateEmail === true,
  });

  const passwordClasses = cn("form-input", {
    "": validatePassword === "begin",
    "red-border": validatePassword === false,
    "green-border": validatePassword === true,
  });

  const phoneClasses = cn("form-input", {
    "": validatePhone === "begin",
    "red-border": validatePhone === false,
    "green-border": validatePhone === true,
  });

  const licenseClasses = cn("license", {
    "": validateLicense === "begin",
    "red-text": validateLicense === false,
    license: validateLicense === true,
  });

  const rulesClasses = cn("license", {
    "": validateRules === "begin",
    "red-text": validateRules === false,
    license: validateRules === true,
  });

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
              dispatch({ type: "SET_NAME", payload: e.target.value });
              dispatch({ type: "VALIDATE_NAME" });
            }}
            value={name.replace(/\d/g, "")}
            className={nameClasses}
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
              dispatch({ type: "SET_SURNAME", payload: e.target.value });
              dispatch({ type: "VALIDATE_SURNAME" });
            }}
            value={surname.replace(/\d/g, "")}
            className={surnameClasses}
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
              dispatch({ type: "SET_EMAIL", payload: e.target.value });
              dispatch({ type: "VALIDATE_EMAIL" });
            }}
            value={email}
            className={emailClasses}
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
                dispatch({ type: "SET_PASSWORD", payload: e.target.value });
                dispatch({ type: "VALIDATE_PASSWORD" });
              }}
              value={password}
              className={passwordClasses}
              maxLength={15}
              id="password"
              type="password"
              placeholder="Пароль"
            />
            <div class="tooltip-content">
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
              dispatch({ type: "SET_TEL", payload: e.target.value });
              dispatch({ type: "VALIDATE_TEL" });
            }}
            value={tel.replace(/[A-Za-zА-Яа-яЁё]/, "")}
            className={phoneClasses}
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
              <span className={licenseClasses}>
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

              <span className={rulesClasses}>Согласен на обработку данных</span>
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
            <div class="checkmark-container">
              <input type="checkbox" id="checkbox" class="checkbox" />
              <label for="checkbox" class="checkmark"></label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
