const SliderInput = ({ onChange, value, name, span, min, max }) => {
  const inputClass = `col-span-${span} lg:col-span-${
    span - 1
  } xl:col-span-${span} focus:outline-none focus:ring focus:ring-black focus:ring-2 focus:ring-opacity-30 focus:ring-offset-4 slider`;

  return (
    <input
      className={inputClass}
      onChange={onChange}
      value={value}
      name={name}
      type="range"
      min={min}
      max={max}
    />
  );
};

export default SliderInput;
