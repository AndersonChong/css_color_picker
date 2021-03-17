import SliderInput from "./SliderInput";
import NumberInput from "./NumberInput";

const FromSlider = ({ colorValue, onChange, onBlur }) => {
  return (
    <div className="relative bg-black rounded-lg h-56">
      <div className="absolute -top-2 -left-2 bg-white h-full w-full rounded-lg border-2 border-black flex flex-col space-y-2 justify-center p-4 space-y-6 hover:translate-x-1 hover:translate-y-1 transform transition">
        <h1 className="text-3xl font-jetbrains-mono">Start</h1>
        <div className="grid grid-cols-10 gap-4 items-center">
          <NumberInput
            onChange={onChange}
            onBlur={onBlur}
            value={colorValue.fr}
            name="fr"
          />
          <SliderInput onChange={onChange} value={colorValue.fr} name="fr" />
          <NumberInput
            onChange={onChange}
            onBlur={onBlur}
            value={colorValue.fg}
            name="fg"
          />
          <SliderInput onChange={onChange} value={colorValue.fg} name="fg" />
          <NumberInput
            onChange={onChange}
            onBlur={onBlur}
            value={colorValue.fb}
            name="fb"
          />
          <SliderInput onChange={onChange} value={colorValue.fb} name="fb" />
        </div>
      </div>
    </div>
  );
};

export default FromSlider;
