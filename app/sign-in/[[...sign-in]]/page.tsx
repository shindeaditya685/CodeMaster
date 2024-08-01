import { SignIn } from "@clerk/nextjs";
import React from "react";

const SingUpPage = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <SignIn />
    </div>
  );
};

export default SingUpPage;