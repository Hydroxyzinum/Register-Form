const FormContainer = ({ children }) => {
  return (
    <div className="form-container">
      <div className="form">
        <h1 className="head">Register Form</h1>
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
