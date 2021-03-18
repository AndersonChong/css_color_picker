const RadioInput = ({ id, value, name, text, status, onChange }) => {
  const isChecked = status === value;

  const divClass = isChecked
    ? "absolute -top-2 -left-2 hover:translate-x-1 hover:translate-y-1 transform transition border-2 border-black rounded w-full h-full bg-yellow-500 hover:bg-yellow-400"
    : "absolute -top-2 -left-2 hover:translate-x-1 hover:translate-y-1 transform transition border-2 border-black rounded w-full h-full bg-white hover:bg-gray-100";

  return (
    <div className="relative bg-black rounded">
      <div className={divClass}>
        <label
          className="font-jetbrains-mono cursor-pointer w-full h-full flex justify-center items-center focus:outline-none focus:ring focus:ring-black focus:ring-opacity-30 focus:ring-offset-2"
          htmlFor={id}
        >
          {text}
        </label>
        <input
          className="appearance-none"
          type="radio"
          value={value}
          id={id}
          name={name}
          checked={isChecked}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default RadioInput;
