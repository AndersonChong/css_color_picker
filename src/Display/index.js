import { useState, useRef } from "react";

import { withFirebase } from "../Firebase";

const Display = ({ authUser, firebase, color, degree, gradientType }) => {
  const { fr, fg, fb, tr, tg, tb } = color;

  const gradientClass =
    gradientType === "linear-gradient"
      ? `${gradientType}(${degree}deg, rgb(${fr}, ${fg}, ${fb}), rgb(${tr}, ${tg}, ${tb}))`
      : `${gradientType}(rgb(${fr}, ${fg}, ${fb}), rgb(${tr}, ${tg}, ${tb}))`;

  const iconRef = useRef(null);

  const [hiddenMsg, setHiddenMsg] = useState(
    "absolute right-20 bottom-5 h-8 w-40 rounded bg-white flex justify-center items-center p-1 border border-red-600 hidden"
  );

  const onClick = (e) => {
    if (!authUser) {
      setHiddenMsg(
        "absolute right-20 bottom-5 h-8 w-40 rounded bg-white flex justify-center items-center p-1 border border-red-600"
      );
      setTimeout(() => {
        setHiddenMsg(
          "absolute right-20 bottom-5 h-8 w-40 rounded bg-white flex justify-center items-center p-1 border border-red-600 hidden"
        );
      }, 3000);
      return;
    }
    firebase.db
      .collection("users")
      .doc(firebase.auth.currentUser.uid)
      .collection("templates")
      .add({
        date: firebase.serverTimeStamp(),
        gradientType: gradientType,
        degree: degree,
        fr: fr,
        fg: fg,
        fb: fb,
        tr: tr,
        tg: tg,
        tb: tb,
      });
    iconRef.current.setAttribute("fill", "red");
    setTimeout(() => iconRef.current.setAttribute("fill", "none"), 3000);
  };

  return (
    <div className="relative h-60-screen bg-black rounded-lg">
      <div
        className="absolute -top-2 -left-2 h-full w-full rounded-lg border-2 border-black hover:translate-y-1 hover:translate-x-1 transform transition"
        style={{ backgroundImage: gradientClass }}
      >
        <div className="relative h-full">
          <div className={hiddenMsg}>
            <p className="text-xs text-red-600">Whoa... U gotta login first!</p>
          </div>
          <svg
            ref={iconRef}
            onClick={onClick}
            className="absolute right-4 bottom-4 w-12 hover:scale-125 transform transition cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default withFirebase(Display);
