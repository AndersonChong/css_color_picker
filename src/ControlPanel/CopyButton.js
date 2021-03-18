import { useState } from "react";

const CopyButton = ({ copyText, text }) => {
  const [btnText, setBtnText] = useState(`Copy ${text}`);

  const onCopy = () => {
    navigator.clipboard
      .writeText(copyText)
      .then(() => {
        setBtnText(`Copied ${text}`);
      })
      .catch(() => {
        setBtnText("Copy Failed");
      });
    setTimeout(() => {
      setBtnText(`Copy ${text}`);
    }, 3000);
  };

  let btnClass;
  if (btnText === `Copy ${text}`) {
    btnClass =
      "absolute -top-2 -left-2 h-full w-full rounded hover:translate-y-1 hover:translate-x-1 transform transition font-jetbrains-mono bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring border-2 border-black focus:ring-black focus:ring-opacity-30";
  } else if (btnText === "Copy Failed") {
    btnClass =
      "absolute -top-2 -left-2 h-full w-full rounded hover:translate-y-1 hover:translate-x-1 transform transition font-jetbrains-mono bg-red-500 hoverer:bg-red-400 focus:outline-none focus:ring border-2 border-black focus:ring-black focus:ring-opacity-30";
  } else {
    btnClass =
      "absolute -top-2 -left-2 h-full w-full rounded hover:translate-y-1 hover:translate-x-1 transform transition font-jetbrains-mono bg-green-500 hover:bg-green-400 focus:outline-none focus:ring border-2 border-black focus:ring-black focus:ring-opacity-30";
  }

  return (
    <div className="relative bg-black flex-1 rounded">
      <button className={btnClass} onClick={onCopy}>
        {btnText}
      </button>
    </div>
  );
};

export default CopyButton;
