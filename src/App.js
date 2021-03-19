import { useState, useEffect } from "react";
import Display from "./Display";
import ControlPanel from "./ControlPanel";
import Header from "./Header";
import Gallery from "./Gallery";
import Form from "./Form";
import { withFirebase } from "./Firebase";
import Profile from "./Profile";

function App({ firebase }) {
  // keep track of the latest color value
  const [colorValue, setColorValue] = useState({
    fr: 43,
    fg: 192,
    fb: 110,
    tr: 35,
    tg: 182,
    tb: 238,
  });
  // keep track of the latest degree
  const [deg, setDeg] = useState(90);

  // keep track of the latest gradient type
  const [gradientType, setGradientType] = useState("linear-gradient");

  // keep track of the latest css code generated
  const [code, setCode] = useState(
    `background-image: ${gradientType}(${deg}deg, rgb(${colorValue.fr}, ${colorValue.fg}, ${colorValue.fb}), rgb(${colorValue.tr}, ${colorValue.tg}, ${colorValue.tb}));`
  );

  const [hex, setHex] = useState("");

  const [rgb, setRgb] = useState(
    `(${colorValue.fr}, ${colorValue.fg}, ${colorValue.fb}), (${colorValue.tr}, ${colorValue.tg}, ${colorValue.tb})`
  );

  const [authUser, setAuthUser] = useState(null);

  // update the css code whenever the color value is changed
  useEffect(() => {
    updateCode(colorValue, gradientType, deg);
  }, [colorValue, gradientType, deg]);

  // update the hex value whenever the color value is changed
  useEffect(() => {
    const { fr, fg, fb, tr, tg, tb } = colorValue;
    const cHex = (dec) => {
      return Number(dec).toString(16);
    };
    setHex(
      `(${cHex(fr)}, ${cHex(fg)}, ${cHex(fb)}), (${cHex(tr)}, ${cHex(
        tg
      )}, ${cHex(tb)})`
    );
  }, [colorValue]);

  useEffect(() => {
    setRgb(
      `(${colorValue.fr}, ${colorValue.fg}, ${colorValue.fb}), (${colorValue.tr}, ${colorValue.tg}, ${colorValue.tb})`
    );
  }, [colorValue]);

  // update degree handler
  const degreeHandler = (e) => {
    setDeg(e.target.value);
  };

  // update gradient type handler
  const gradientTypeHandler = (e) => {
    setGradientType(e.target.value);
  };

  // method to update the css code
  const updateCode = (colorValue, gradientType, degree) => {
    const { fr, fg, fb, tr, tg, tb } = colorValue;
    if (gradientType === "linear-gradient") {
      setCode(
        `background-image: ${gradientType}(${degree}deg, rgb(${fr}, ${fg}, ${fb}), rgb(${tr}, ${tg}, ${tb}));`
      );
    } else {
      setCode(
        `background-image: ${gradientType}(rgb(${fr}, ${fg}, ${fb}), rgb(${tr}, ${tg}, ${tb}));`
      );
    }
  };

  // method to reset the color value whenever it is out of range
  const blurHandler = (e) => {
    if (e.target.name === "degree") {
      if (!e.target.value || e.target.value < 0) {
        setDeg(0);
      } else if (e.target.value > 360) {
        setDeg(360);
      }
    } else {
      if (!e.target.value || e.target.value < 0) {
        setColorValue({ ...colorValue, [e.target.name]: 0 });
      } else if (e.target.value > 255) {
        setColorValue({ ...colorValue, [e.target.name]: 255 });
      }
    }
  };

  // method to update the color value
  const changeHandler = (e) => {
    setColorValue({ ...colorValue, [e.target.name]: parseInt(e.target.value) });
  };

  useEffect(() => {
    firebase.auth.onAuthStateChanged((authUser) => setAuthUser(authUser));
  }, [firebase.auth, authUser]);

  return (
    <div className="container mx-auto flex flex-col space-y-12 p-4">
      <div className="flex flex-col space-y-4">
        <Header title="~~ CSS Gradient Picker ~~" color="bg-yellow-500" />
        <Display
          color={colorValue}
          degree={deg}
          gradientType={gradientType}
          authUser={authUser}
        />
        <ControlPanel
          colorValue={colorValue}
          changeHandler={changeHandler}
          blurHandler={blurHandler}
          code={code}
          hex={hex}
          degree={deg}
          rgb={rgb}
          degreeHandler={degreeHandler}
          gradientType={gradientType}
          gradientTypeHandler={gradientTypeHandler}
        />
      </div>
      <div className="flex flex-col space-y-4">
        <Header title="~~ Saved Gradients ~~" color="bg-blue-500" />
        {authUser ? (
          <>
            <Gallery authUser={authUser} />
            <Profile />
          </>
        ) : (
          <Form />
        )}
      </div>
    </div>
  );
}

export default withFirebase(App);
