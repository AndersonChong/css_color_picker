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
  return (
    <button
      className="border-2 border-black rounded flex-1 hover:bg-white focus:outline-none focus:ring focus:ring-black focus:ring-opacity-30 font-jetbrains-mono"
      onClick={onCopy}
    >
      {btnText}
    </button>
  );
};

export default CopyButton;
