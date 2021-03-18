const NumberInput = ({ onChange, onBlur, value, name, span }) => {
  const inputClass = `col-span-${span} lg:col-span-${
    span + 1
  } xl:col-span-${span} flex px-0.5 focus:outline-none focus:ring focus:ring-black focus:ring-opacity-30 focus:ring-offset-2`;

  return (
    <input
      className={inputClass}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      name={name}
      type="number"
    />
  );
};

export default NumberInput;
