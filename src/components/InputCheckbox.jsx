const InputCheckbox = ({
  type,
  onChange,
  value,
  className,
  id,
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
        id={id}
        className={className}
        name={name}
        aria-label={ariaLabel}
        aria-invalid={ariaInvaild}
      />
    </>
  );
};

export default InputCheckbox;