import React, { useContext } from "react";
import { Context } from "../context/Context";
import {
  inputClassGenerator,
  checkboxClassGenerator,
} from "../helpers/generators";
import { finalValidation } from "../helpers/validate";

import InputField from "./InputField";
import InputCheckbox from "./InputCheckbox";
import OtherInputs from "./OtherInputs";

const Form = () => {
  const contextData = useContext(Context);

  const { state, dispatch } = contextData;

  const submitForm = (e) => {
    e.preventDefault();
    const formValidate = [
      state.validateName,
      state.validateSurname,
      state.validateEmail,
      state.validatePassword,
      state.validatePhone,
      state.validateLicense,
      state.validateRules,
    ];
    finalValidation(formValidate, dispatch);
  };

  const onChangeValue = (type, validateType, value) => {
    dispatch({ type: type, payload: value });
    dispatch({ type: validateType });
  };

  const onChangeCheckbox = (type, value) => {
    value
      ? dispatch({ type: type, payload: true })
      : dispatch({ type: type, payload: false });
  };

  return (
    <form onSubmit={submitForm} className="register-form">
      <InputField
        type={"text"}
        onChange={(e) =>
          onChangeValue("SET_NAME", "VALIDATE_NAME", e.target.value)
        }
        value={state.name.replace(/\d/g, "")}
        className={inputClassGenerator(state.validateName)}
        maxLength={20}
        minLength={1}
        id={"name"}
        placeholder={"Имя"}
        name={"name"}
        ariaLabel={"Name"}
        ariaInvaild={state.validateName ? "false" : "true"}
      />
      <InputField
        type={"text"}
        onChange={(e) =>
          onChangeValue("SET_SURNAME", "VALIDATE_SURNAME", e.target.value)
        }
        value={state.surname.replace(/\d/g, "")}
        className={inputClassGenerator(state.validateSurname)}
        maxLength={30}
        minLength={1}
        id={"surname"}
        placeholder={"Фамилия"}
        name={"surname"}
        aria-label={"Surname"}
        aria-invalid={state.validateSurname ? "false" : "true"}
      />
      <InputField
        type={"email"}
        onChange={(e) =>
          onChangeValue("SET_EMAIL", "VALIDATE_EMAIL", e.target.value)
        }
        value={state.email}
        className={inputClassGenerator(state.validateEmail)}
        maxLength={50}
        minLength={6}
        id={"email"}
        placeholder={"Электронная почта"}
        name={"email"}
        aria-label={"Email"}
        aria-invalid={state.validateEmail ? "false" : "true"}
      />
      <div className="tooltip-container">
        <InputField
          type={"password"}
          onChange={(e) =>
            onChangeValue("SET_PASSWORD", "VALIDATE_PASSWORD", e.target.value)
          }
          value={state.password}
          className={inputClassGenerator(state.validatePassword)}
          maxLength={16}
          minLength={8}
          id={"password"}
          placeholder={"Пароль"}
          name={"password"}
          aria-label={"Password"}
          aria-invalid={state.validatePassword ? "false" : "true"}
        />
        <div className="tooltip-content">
          Пароль должен содержать хотя бы одну цифру, одну строчную и одну
          прописную букву, а также хотя бы один из специальных символов: ! @ # $
          % ^ & *. <br /> Длина пароля должна быть не менее 8 символов.
        </div>
      </div>
      <InputField
        type={"tel"}
        onChange={(e) =>
          onChangeValue("SET_TEL", "VALIDATE_TEL", e.target.value)
        }
        value={state.tel.replace(/[A-Za-zА-Яа-яЁё]/, "")}
        className={inputClassGenerator(state.validatePhone)}
        maxLength={25}
        id={"tel"}
        placeholder={"Номер телефона"}
        name={"number"}
        aria-label={"Number"}
        aria-invalid={state.validatePhone ? "false" : "true"}
      />
      <div className="day-of_birthday">
        <OtherInputs
          type="date"
          onChange={(e) =>
            dispatch({ type: "SET_DOF", payload: e.target.value })
          }
          id={"date"}
          className={"input-date"}
          name={"date"}
          aria-label={"Date"}
        />
        <span className="dof-span">Дата рождения:</span>
      </div>
      <div className="license-container">
        <div className="license-item">
          <InputCheckbox
            type={"checkbox"}
            onChange={(e) =>
              onChangeCheckbox("VALIDATE_LICENSE", e.target.checked)
            }
            value={state.validateLicense}
            className={"check-license"}
            id={"license"}
            name={"license"}
            aria-label={"License"}
            aria-invalid={state.validateLicense ? "true" : "false"}
          />
          <span className={checkboxClassGenerator(state.validateLicense)}>
            Согласен с правилами пользования [Имя ресурса] [Правила пользования]
          </span>
        </div>
        <div className="license-item">
          <InputCheckbox
            onChange={(e) =>
              onChangeCheckbox("VALIDATE_RULES", e.target.checked)
            }
            id={"rules"}
            className={"check-license"}
            type={"checkbox"}
            name={"rules"}
            aria-label={"Rules"}
            aria-invalid={state.validateRules ? "true" : "false"}
          />
          <span className={checkboxClassGenerator(state.validateRules)}>
            Согласен(a) на обработку данных
          </span>
        </div>
      </div>
      <div className="submit-container">
        <OtherInputs
          type={"submit"}
          style={{
            color: state.validate ? "transparent" : "white",
            background: state.validate ? "green" : "#0575E6",
          }}
          className={"submit-btn"}
          name={"submit"}
          aria-label={"Submit"}
        />
        <div className={state.validate ? "spinner" : "spinner-none"}></div>
      </div>
    </form>
  );
};

export default Form;
