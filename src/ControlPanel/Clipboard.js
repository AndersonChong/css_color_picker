import CopyButton from "./CopyButton";

const Clipboard = ({ code, hex, rgb }) => {
  return (
    <div className="relative bg-black rounded-lg h-56">
      <div className="absolute -top-2 -left-2 bg-white h-full w-full rounded-lg border-2 border-black flex flex-col space-y-4 justify-center p-4 hover:translate-x-1 hover:translate-y-1 transform transition">
        <CopyButton copyText={hex} text="Hex" />
        <CopyButton copyText={rgb} text="RGB" />
        <CopyButton copyText={code} text="CSS" />
      </div>
    </div>
  );
};

export default Clipboard;
