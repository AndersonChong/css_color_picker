import { useState, useEffect } from "react";
import Display from "./Display";
import ControlPanel from "./ControlPanel";
import Header from "./Header";

function App() {
  // keep track of the latest color value
  const [colorValue, setColorValue] = useState({
    fr: 43,
    fg: 192,
    fb: 110,
    tr: 35,
    tg: 182,
    tb: 238,
  });

  // keep track of the latest css code generated
  const [code, setCode] = useState(
    "background-image: linear-gradient(to right, rgb(43, 192, 110), rgb(35, 182, 238));"
  );

  // update the css code whenever the color value is changed
  useEffect(() => {
    updateCode(colorValue);
  }, [colorValue]);

  // method to update the css code
  const updateCode = (colorValue) => {
    const { fr, fg, fb, tr, tg, tb } = colorValue;
    setCode(
      `background-image: linear-gradient(to right, rgb(${fr}, ${fg}, ${fb}), rgb(${tr}, ${tg}, ${tb}));`
    );
  };

  // method to reset the color value whenever it is out of range
  const blurHandler = (e) => {
    if (!e.target.value || e.target.value < 0) {
      setColorValue({ ...colorValue, [e.target.name]: 0 });
    } else if (e.target.value > 255) {
      setColorValue({ ...colorValue, [e.target.name]: 255 });
    }
  };

  // method to update the color value
  const changeHandler = (e) => {
    setColorValue({ ...colorValue, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto flex flex-col space-y-4 p-4">
      <Header />
      <Display color={colorValue} />
      <ControlPanel
        colorValue={colorValue}
        changeHandler={changeHandler}
        blurHandler={blurHandler}
        code={code}
      />
    </div>
  );
}

export default App;
