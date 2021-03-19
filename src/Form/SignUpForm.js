import { useState } from "react";
import { withFirebase } from "../Firebase";

const SignUpForm = ({ firebase, onClick }) => {
  const [credential, setCredential] = useState({ email: "", password: "" });
  const [inputClass, setInputClass] = useState(
    "border-2 border-black rounded w-full text-center py-1 px-1 focus:outline-none focus:ring focus:ring-black focus:ring-opacity-30"
  );
  const [error, setError] = useState(null);

  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    firebase
      .createUserWithEmailAndPassword(credential.email, credential.password)
      .catch((error) => {
        setError(error);
        setInputClass(
          "border-2 border-red-600 rounded w-full text-center py-1 px-1 focus:outline-none focus:ring focus:ring-black focus:ring-opacity-30"
        );
      });
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h3 className="text-2xl font-jetbrains-mono">Create Your Own Paradise</h3>
      <p>
        Sign up now to{" "}
        <span className="border-dashed border-b border-gray-500">
          save custom gradients
        </span>
        , it's free anyway
      </p>
      <form
        className="pt-8 w-96 flex flex-col items-center space-y-4"
        onSubmit={onSubmit}
      >
        <input
          className={inputClass}
          type="email"
          name="email"
          placeholder="Email"
          value={credential.email}
          onChange={onChange}
        />
        <input
          className={inputClass}
          type="password"
          name="password"
          placeholder="Password"
          value={credential.password}
          onChange={onChange}
        />
        {error && (
          <p className="text-sm text-red-600 text-center">{error.message}</p>
        )}
        <div className="relative bg-black h-10 w-full rounded">
          <button
            className="absolute -top-2 -left-2 h-full w-full rounded font-jetbrains-mono bg-blue-400 hover:bg-blue-300 border-2 border-black hover:translate-x-1 hover:translate-y-1 transform transition focus:outline-none focus:ring focus:ring-black focus:ring-opacity-30"
            type="submit"
          >
            Join the Fun!
          </button>
        </div>
        <div className="relative bg-black h-10 w-full rounded">
          <button
            className="absolute -top-2 -left-2 h-full w-full rounded font-jetbrains-mono bg-white hover:bg-gray-100 border-2 border-black hover:translate-x-1 hover:translate-y-1 transform transition focus:outline-none focus:ring focus:ring-black focus:ring-opacity-30"
            type="button"
            onClick={onClick}
          >
            Already A Legend?
          </button>
        </div>
      </form>
    </div>
  );
};

export default withFirebase(SignUpForm);
