import { useState } from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

const Form = () => {
  const [whichForm, setWhichForm] = useState("signup");

  const swapForm = () => {
    if (whichForm === "signup") {
      setWhichForm("signin");
    } else {
      setWhichForm("signup");
    }
  };

  return (
    <div className="relative h-112 bg-black rounded-lg">
      <div className="absolute -top-2 -left-2 h-full w-full p-4 rounded-lg bg-white border-2 border-black hover:translate-y-1 hover:translate-x-1 transform transition flex justify-center items-center">
        {whichForm === "signup" ? (
          <SignUpForm onClick={swapForm} />
        ) : (
          <SignInForm onClick={swapForm} />
        )}
      </div>
    </div>
  );
};

export default Form;
