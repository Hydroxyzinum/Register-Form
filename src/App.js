import React, { useReducer, useEffect } from "react";

import { Context } from "./context/Context";
import { initialState, reducer } from "./reducers/reducer";
import FormContainer from "./components/FormContainer";
import Form from "./components/Form";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.validate) {
      window.open("vk.com");
    }
  }, [state.validate]);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <FormContainer>
        <Form />
      </FormContainer>
    </Context.Provider>
  );
};

export default App;
