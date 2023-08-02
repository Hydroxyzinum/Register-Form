const InputField = ({
  type,
  onChange,
  value,
  className,
  maxLength,
  minLength,
  id,
  placeholder,
  name,
  ariaLabel,
  ariaInvaild,
}) => {
  return (
    <>
      <label htmlFor={id} className="sr-only">
        {name}
      </label>
      <input
        onChange={onChange}
        type={type}
        value={value}
        placeholder={placeholder}
        id={id}
        className={className}
        maxLength={maxLength}
        minLength={minLength}
        name={name}
        aria-label={ariaLabel}
        aria-invalid={ariaInvaild}
      />
    </>
  );
};

export default InputField;
