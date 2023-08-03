import { useContext } from "react";
import { Context } from "../context/Context";

const Account = () => {
  const contextData = useContext(Context);
  const { state } = contextData;
  return (
    <div className="">
      <p>Ваше Имя: {state.name}</p>
      <p>Ваша Фамилия: {state.surname}</p>
      <p>Ваш Email: {state.email}</p>
      <p>Ваш номер телефона: {state.tel}</p>
      <p>Ваша дата рождения: {state.dof}</p>
    </div>
  )
};

export default Account;
