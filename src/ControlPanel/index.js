import FromSlider from "./FromSlider";
import ToSlider from "./ToSlider";
import Clipboard from "./Clipboard";
import Setting from "./Setting";

const ControlPanel = ({
  colorValue,
  changeHandler,
  blurHandler,
  code,
  hex,
  rgb,
  degree,
  degreeHandler,
  gradientType,
  gradientTypeHandler,
}) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <FromSlider
        colorValue={colorValue}
        onChange={changeHandler}
        onBlur={blurHandler}
      />
      <ToSlider
        colorValue={colorValue}
        onChange={changeHandler}
        onBlur={blurHandler}
      />
      <Setting
        degree={degree}
        degreeChange={degreeHandler}
        onBlur={blurHandler}
        gradientType={gradientType}
        gradientChange={gradientTypeHandler}
      />
      <Clipboard code={code} hex={hex} rgb={rgb} />
    </div>
  );
};

export default ControlPanel;
