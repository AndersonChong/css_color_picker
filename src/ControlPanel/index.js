import FromSlider from "./FromSlider";
import ToSlider from "./ToSlider";
import Clipboard from "./Clipboard";

const ControlPanel = ({ colorValue, changeHandler, blurHandler, code }) => {
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
      <Clipboard code={code} />
    </div>
  );
};

export default ControlPanel;
