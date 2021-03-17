import { useState } from "react";

const Clipboard = ({ code }) => {
  const [btnText, setBtnText] = useState("Copy");

  const onCopy = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setBtnText("Copied");
      })
      .catch(() => {
        setBtnText("Failed");
      });
    setTimeout(() => {
      setBtnText("Copy");
    }, 3000);
  };

  let btnClass;
  if (btnText === "Copy") {
    btnClass =
      "absolute -top-2 -left-2 h-full w-full rounded hover:translate-y-1 hover:translate-x-1 transform transition bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring border-2 border-black focus:ring-black focus:ring-opacity-30";
  } else if (btnText === "Failed") {
    btnClass =
      "absolute -top-2 -left-2 h-full w-full rounded hover:translate-y-1 hover:translate-x-1 transform transition bg-red-500 hoverer:bg-red-400 focus:outline-none focus:ring border-2 border-black focus:ring-black focus:ring-opacity-30";
  } else {
    btnClass =
      "absolute -top-2 -left-2 h-full w-full rounded hover:translate-y-1 hover:translate-x-1 transform transition bg-green-500 hover:bg-green-400 focus:outline-none focus:ring border-2 border-black focus:ring-black focus:ring-opacity-30";
  }

  return (
    <div className="relative bg-black rounded-lg h-56">
      <div className="absolute -top-2 -left-2 bg-white h-full w-full rounded-lg border-2 border-black flex flex-col space-y-2 justify-center p-4 space-y-6 hover:translate-x-1 hover:translate-y-1 transform transition">
        <div className="relative bg-black flex-1 rounded">
          <button className={btnClass} onClick={onCopy}>
            CSS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clipboard;
