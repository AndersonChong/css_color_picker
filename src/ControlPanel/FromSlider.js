const FromSlider = ({ colorValue, onChange, onBlur }) => {
  return (
    <div className="bg-gray-500 rounded-lg p-2 flex flex-col space-y-2 border-4 border-black ">
      <h1 className="text-center text-3xl py-2 text-white">START</h1>
      <div className="grid grid-cols-10 gap-4 bg-white rounded-b-lg p-3">
        <input
          className="col-span-2 lg:col-span-3 xl:col-span-2 px-0.5 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-offset-2"
          onChange={onChange}
          onBlur={onBlur}
          value={colorValue.fr}
          name="fr"
          type="number"
          max="255"
        />
        <input
          className="col-span-8 lg:col-span-7 xl:col-span-8 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-offset-2"
          onChange={onChange}
          value={colorValue.fr}
          name="fr"
          type="range"
          min="0"
          max="255"
        />
        <input
          className="col-span-2 lg:col-span-3 xl:col-span-2 rounded px-0.5 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-offset-2"
          onChange={onChange}
          onBlur={onBlur}
          value={colorValue.fg}
          name="fg"
          type="number"
          max="255"
        />
        <input
          className="col-span-8 lg:col-span-7 xl:col-span-8 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-offset-2"
          onChange={onChange}
          value={colorValue.fg}
          name="fg"
          type="range"
          min="0"
          max="255"
        />
        <input
          className="col-span-2 lg:col-span-3 xl:col-span-2 rounded px-0.5 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-offset-2"
          onChange={onChange}
          onBlur={onBlur}
          value={colorValue.fb}
          name="fb"
          type="number"
          max="255"
        />
        <input
          className="col-span-8 lg:col-span-7 xl:col-span-8 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-offset-2"
          onChange={onChange}
          value={colorValue.fb}
          name="fb"
          type="range"
          min="0"
          max="255"
        />
      </div>
    </div>
  );
};

export default FromSlider;
