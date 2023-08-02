import React, { useEffect, useReducer } from "react";
import { initialState, reducer } from "../reducer/reducer";
import { loremIpsum } from "../helpers/loremIpsum";
import {
  inputClassGenerator,
  checkboxClassGenerator,
} from "../helpers/generators";
import { finalValidation } from "../helpers/validate";
import InputField from "./InputField";

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    name,
    surname,
    email,
    password,
    tel,
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
      window.open("vk.com");
    }
  }, [validate]);

  return (
    <div className="form-container">
      <div className="form">
        <h1 className="head">Register Form</h1>
        <form onSubmit={submitForm} className="register-form">
          <InputField
            type={"text"}
            onChange={(e) =>
              onChangeFunc("SET_NAME", "VALIDATE_NAME", e.target.value)
            }
            value={name.replace(/\d/g, "")}
            className={inputClassGenerator(validateName)}
            maxLength={20}
            minLength={1}
            id={"name"}
            placeholder={"Имя"}
            name={"name"}
            ariaLabel={"Name"}
            ariaInvaild={validateName ? "false" : "true"}
          />
          <InputField
            type={"text"}
            onChange={(e) =>
              onChangeFunc("SET_SURNAME", "VALIDATE_SURNAME", e.target.value)
            }
            value={surname.replace(/\d/g, "")}
            className={inputClassGenerator(validateSurname)}
            maxLength={30}
            minLength={1}
            id={"surname"}
            placeholder={"Фамилия"}
            name={"surname"}
            aria-label={"Surname"}
            aria-invalid={validateSurname ? "false" : "true"}
          />
          <InputField
            type={"email"}
            onChange={(e) =>
              onChangeFunc("SET_EMAIL", "VALIDATE_EMAIL", e.target.value)
            }
            value={email}
            className={inputClassGenerator(validateEmail)}
            maxLength={50}
            minLength={6}
            id={"email"}
            placeholder={"Электронная почта"}
            name={"emal"}
            aria-label={"Email"}
            aria-invalid={validateEmail ? "false" : "true"}
          />
          <div className="tooltip-container">
            <InputField
              type={"password"}
              onChange={(e) =>
                onChangeFunc(
                  "SET_PASSWORD",
                  "VALIDATE_PASSWORD",
                  e.target.value
                )
              }
              value={password}
              className={inputClassGenerator(validatePassword)}
              maxLength={16}
              minLength={8}
              id={"password"}
              placeholder={"Пароль"}
              name={"password"}
              aria-label={"Password"}
              aria-invalid={validatePassword ? "false" : "true"}
            />
            <div className="tooltip-content">
              Пароль должен содержать хотя бы одну цифру, одну строчную и одну
              прописную букву, а также хотя бы один из специальных символов: ! @
              # $ % ^ & *. <br /> Длина пароля должна быть не менее 8 символов.
            </div>
          </div>
          <InputField
            type={"tel"}
            onChange={(e) =>
              onChangeFunc("SET_TEL", "VALIDATE_TEL", e.target.value)
            }
            value={tel.replace(/[A-Za-zА-Яа-яЁё]/, "")}
            className={inputClassGenerator(validatePhone)}
            maxLength={25}
            id={"tel"}
            placeholder={"Номер телефона"}
            name={"number"}
            aria-label={"Number"}
            aria-invalid={validatePhone ? "false" : "true"}
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
              <label htmlFor="licence" className="sr-only">
                LICENSE
              </label>
              <input
                type="checkbox"
                onChange={(e) =>
                  e.target.checked
                    ? dispatch({ type: "VALIDATE_LICENSE", payload: true })
                    : dispatch({ type: "VALIDATE_LICENSE", payload: false })
                }
                value={validateLicense}
                maxLength={0}
                minLength={0}
                className="check-license"
                id="license"
                name="license"
                aria-label={"License"}
                aria-invalid={validateLicense ? "true" : "false"}
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
              <label htmlFor="rules" className="sr-only">
                RULES
              </label>
              <input
                onChange={(e) =>
                  e.target.checked
                    ? dispatch({ type: "VALIDATE_RULES", payload: true })
                    : dispatch({ type: "VALIDATE_RULES", payload: false })
                }
                id="rules"
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
