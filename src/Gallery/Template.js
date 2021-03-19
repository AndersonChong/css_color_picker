import CopyButton from "./CopyButton";
import { withFirebase } from "../Firebase";

const Template = ({
  firebase,
  id,
  code,
  hex,
  rgb,
  color,
  degree,
  gradientType,
}) => {
  const { fr, fg, fb, tr, tg, tb } = color;

  const gradientClass =
    gradientType === "linear-gradient"
      ? `${gradientType}(${degree}deg, rgb(${fr}, ${fg}, ${fb}), rgb(${tr}, ${tg}, ${tb}))`
      : `${gradientType}(rgb(${fr}, ${fg}, ${fb}), rgb(${tr}, ${tg}, ${tb}))`;

  const deleteTemplate = () => {
    console.log(id);
    console.log("delete button pressed");
    firebase.db
      .collection("users")
      .doc(firebase.auth.currentUser.uid)
      .collection("templates")
      .doc(id)
      .delete();
  };

  return (
    <div className="relative bg-black rounded-lg w-full aspect-h-1 aspect-w-1 flex-grow-0">
      <div
        className="absolute -top-2 -left-2 bg-white rounded-lg border-2 border-black hover:translate-y-1 hover:translate-x-1 transform transition"
        style={{ backgroundImage: gradientClass }}
      >
        <div className="h-full flex flex-col p-2 md:p-3 lg:p-4 space-y-2 md:space-y-3 lg:space-y-4 opacity-0 hover:opacity-100 transition">
          <CopyButton copyText={hex} text="Hex" />
          <CopyButton copyText={rgb} text="RGB" />
          <CopyButton copyText={code} text="CSS" />
          <button
            type="button"
            className="border-2 border-black rounded flex-1 hover:bg-white focus:outline-none focus:ring focus:ring-black focus:ring-opacity-30 font-jetbrains-mono hover:text-red-600"
            onClick={deleteTemplate}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default withFirebase(Template);
