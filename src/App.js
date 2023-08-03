import React, { useReducer, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Context } from "./context/Context";
import { initialState, reducer } from "./reducers/reducer";
import FormContainer from "./components/FormContainer";
import Form from "./components/Form";
import Account from "./components/Account";
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();

  useEffect(() => {
    if (state.validate) {
      navigate("/account");
    }
  }, [navigate, state.validate]);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Routes>
        <Route path="/account" element={<Account />} />
        <Route
          path="/"
          element={
            <FormContainer>
              <Form />
            </FormContainer>
          }
        />
      </Routes>
    </Context.Provider>
  );
};

export default App;
