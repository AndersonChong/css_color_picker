const SliderInput = ({ onChange, value, name }) => {
  return (
    <input
      className="col-span-8 lg:col-span-7 xl:col-span-8 focus:outline-none focus:ring focus:ring-black focus:ring-2 focus:ring-opacity-30 focus:ring-offset-4 slider"
      onChange={onChange}
      value={value}
      name={name}
      type="range"
      min="0"
      max="255"
    />
  );
};

export default SliderInput;
