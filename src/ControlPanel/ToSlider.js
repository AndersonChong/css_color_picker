import NumberInput from "./NumberInput";
import SliderInput from "./SliderInput";

const ToSlider = ({ colorValue, onChange, onBlur }) => {
  return (
    <div className="relative bg-black rounded-lg h-56">
      <div className="absolute -top-2 -left-2 bg-white h-full w-full rounded-lg border-2 border-black flex flex-col space-y-2 justify-center p-4 space-y-6 hover:translate-x-1 hover:translate-y-1 transform transition">
        <h1 className="text-3xl font-jetbrains-mono">End</h1>
        <div className="grid grid-cols-10 gap-4 items-center">
          <NumberInput
            onChange={onChange}
            onBlur={onBlur}
            value={colorValue.tr}
            name="tr"
          />
          <SliderInput
            onChange={onChange}
            value={colorValue.tr}
            name="tr"
            min="0"
            max="255"
          />
          <NumberInput
            onChange={onChange}
            onBlur={onBlur}
            value={colorValue.tg}
            name="tg"
          />
          <SliderInput
            onChange={onChange}
            value={colorValue.tg}
            name="tg"
            min="0"
            max="255"
          />
          <NumberInput
            onChange={onChange}
            onBlur={onBlur}
            value={colorValue.tb}
            name="tb"
          />
          <SliderInput
            onChange={onChange}
            value={colorValue.tb}
            name="tb"
            min="0"
            max="255"
          />
        </div>
      </div>
    </div>
  );
};

export default ToSlider;
