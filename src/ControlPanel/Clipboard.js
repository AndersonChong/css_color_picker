import { useState, useRef } from "react";

const Clipboard = ({ code }) => {
  const [btnText, setBtnText] = useState("Copy");
  const codeRef = useRef();

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

  let btnClass = "";
  if (btnText === "Copy") {
    btnClass =
      "col-span-10 rounded text-white hover:-translate-y-0.5 transform transition h-12 bg-yellow-500 hover:bg-yellow-400";
  } else if (btnText === "Failed") {
    btnClass =
      "col-span-10 rounded text-white hover:-translate-y-0.5 transform transition h-12 bg-red-500 hover:bg-red-400";
  } else {
    btnClass =
      "col-span-10 rounded text-white hover:-translate-y-0.5 transform transition h-12 bg-green-500 hover:bg-green-400";
  }

  return (
    <div className="bg-gray-500 rounded-lg p-2 flex flex-col space-y-2 border-4 border-black ">
      <h1 className="text-center text-3xl py-2 text-white">CSS</h1>
      <div className="grid grid-cols-10 gap-4 bg-white rounded-b-lg p-3">
        <input
          ref={codeRef}
          className="col-span-10 border border-gray-500 rounded px-2 py-1.5 cursor-text"
          type="text"
          value={code}
          disabled
        />
        <button className={btnClass} onClick={onCopy}>
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default Clipboard;
