import { withFirebase } from "../Firebase";

const Profile = ({ firebase }) => {
  const onClick = () => {
    firebase.doSignOut();
  };

  return (
    <div className="relative h-28 bg-black rounded-lg">
      <div className="absolute -top-2 -left-2 h-full w-full rounded-lg border-2 border-black hover:translate-y-1 hover:translate-x-1 transform transition bg-white flex flex-col justify-center items-center p-4 space-y-4">
        <p className="font-jetbrains-mono">
          Login as: {firebase.auth.currentUser.email}
        </p>
        <div className="relative bg-black h-10 w-48 rounded">
          <button
            className="absolute -top-2 -left-2 h-full w-full rounded font-jetbrains-mono bg-blue-400 hover:bg-blue-300 border-2 border-black hover:translate-x-1 hover:translate-y-1 transform transition focus:outline-none focus:ring focus:ring-black focus:ring-opacity-30"
            onClick={onClick}
          >
            Switch User
          </button>
        </div>
      </div>
    </div>
  );
};

export default withFirebase(Profile);
