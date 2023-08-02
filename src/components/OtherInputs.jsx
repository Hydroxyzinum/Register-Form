const OtherInputs = ({
  type,
  style,
  onChange,
  className,
  id,
  name,
  ariaLabel,
}) => {
  if (type === "date") {
    return (
      <>
        <label className="sr-only" htmlFor={name}>
          {name}
        </label>
        <input
          type={type}
          onChange={onChange}
          id={id}
          className={className}
          name={name}
          aria-label={ariaLabel}
        />
      </>
    );
  } else {
    return (
      <>
        <input
          type={type}
          onChange={onChange}
          style={style}
          className={className}
          name={name}
          aria-label={ariaLabel}
        />
      </>
    );
  }
};

export default OtherInputs;
