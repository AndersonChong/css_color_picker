import { useState, useEffect } from "react";
import Template from "./Template";
import { withFirebase } from "../Firebase";

const Gallery = ({ authUser, firebase }) => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    if (!authUser) return;
    firebase.db
      .collection("users")
      .doc(firebase.auth.currentUser.uid)
      .collection("templates")
      .orderBy("date", "desc")
      .onSnapshot((snapshot) => {
        setTemplates(
          snapshot.docs.map((doc) => {
            const color = {
              fr: doc.data().fr,
              fg: doc.data().fg,
              fb: doc.data().fb,
              tr: doc.data().tr,
              tg: doc.data().tg,
              tb: doc.data().tb,
            };
            const gradientType = doc.data().gradientType;
            const degree = doc.data().degree;
            return (
              <Template
                key={doc.id}
                id={doc.id}
                color={color}
                gradientType={gradientType}
                degree={degree}
                code={getCode(color, gradientType, degree)}
                hex={getHex(color)}
                rgb={getRgb(color)}
              />
            );
          })
        );
      });
  }, [authUser, firebase.auth.currentUser.uid, firebase.db]);

  const getCode = (colorValue, gradientType, degree) => {
    const { fr, fg, fb, tr, tg, tb } = colorValue;
    if (gradientType === "linear-gradient") {
      return `background-image: ${gradientType}(${degree}deg, rgb(${fr}, ${fg}, ${fb}), rgb(${tr}, ${tg}, ${tb}));`;
    } else {
      return `background-image: ${gradientType}(rgb(${fr}, ${fg}, ${fb}), rgb(${tr}, ${tg}, ${tb}));`;
    }
  };

  const getHex = (colorValue) => {
    const { fr, fg, fb, tr, tg, tb } = colorValue;
    const cHex = (dec) => {
      return Number(dec).toString(16);
    };
    return `(${cHex(fr)}, ${cHex(fg)}, ${cHex(fb)}), (${cHex(tr)}, ${cHex(
      tg
    )}, ${cHex(tb)})`;
  };

  const getRgb = (colorValue) => {
    return `(${colorValue.fr}, ${colorValue.fg}, ${colorValue.fb}), (${colorValue.tr}, ${colorValue.tg}, ${colorValue.tb})`;
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {templates.length === 0 ? (
        <div className="relative h-28 bg-black rounded-lg col-span-full">
          <div className="absolute -top-2 -left-2 h-full w-full rounded-lg border-2 border-black hover:translate-y-1 hover:translate-x-1 transform transition bg-white flex flex-col justify-center items-center p-4 space-y-4">
            <p className="font-jetbrains-mono">
              Opps! Can't find any gradients, try adding one...
            </p>
          </div>
        </div>
      ) : (
        templates
      )}
    </div>
  );
};

export default withFirebase(Gallery);
