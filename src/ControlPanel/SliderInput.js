const SliderInput = ({ onChange, value, name, min, max }) => {
  return (
    <input
      className="col-span-8 lg:col-span-7 xl:col-span-8 focus:outline-none focus:ring focus:ring-black focus:ring-2 focus:ring-opacity-30 focus:ring-offset-4 slider"
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
