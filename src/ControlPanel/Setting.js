import NumberInput from "./NumberInput";
import SliderInput from "./SliderInput";
import RadioInput from "./RadioInput";

const Setting = ({
  degreeChange,
  onBlur,
  degree,
  gradientChange,
  gradientType,
}) => {
  return (
    <div className="relative bg-black rounded-lg h-56">
      <div className="absolute -top-2 -left-2 bg-white h-full w-full rounded-lg border-2 border-black flex flex-col space-y-2 justify-center p-4 space-y-6 hover:translate-x-1 hover:translate-y-1 transform transition">
        <h1 className="text-3xl font-jetbrains-mono">Settings</h1>
        <div className="grid grid-cols-10 gap-5 items-center">
          <NumberInput
            onChange={degreeChange}
            onBlur={onBlur}
            value={degree}
            name="degree"
          />
          <SliderInput
            onChange={degreeChange}
            value={degree}
            name="degree"
            min="0"
            max="360"
          />
          <div className="col-span-full h-16 grid grid-cols-2 gap-4">
            <RadioInput
              value="linear-gradient"
              id="linear"
              name="gradient"
              text="Linear"
              status={gradientType}
              onChange={gradientChange}
            />
            <RadioInput
              value="radial-gradient"
              id="radial"
              name="gradient"
              text="Radial"
              status={gradientType}
              onChange={gradientChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
