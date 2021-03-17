const NumberInput = ({ onChange, onBlur, value, name }) => {
  return (
    <input
      className="col-span-2 lg:col-span-3 xl:col-span-2 px-0.5 focus:outline-none focus:ring focus:ring-black focus:ring-opacity-30 focus:ring-offset-2"
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      name={name}
      type="number"
      max="255"
    />
  );
};

export default NumberInput;
