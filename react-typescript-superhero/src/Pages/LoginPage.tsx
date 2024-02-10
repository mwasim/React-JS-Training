import React from "react";
import Input from "../Components/Input";

const LoginPage = () => {
  return (
    <div className="bg-blue-600 h-[100vh] flex items-center justify-center p-10">
      <div className="w-full md:w-[450px]">
        <h1 className="text-white text-center font-bold text-4xl md:text-6xl mb-10">
          Login
        </h1>
        <div className="bg-white w-full p-6 min-h-[150px] flex flex-col gap-3 rounded-xl drop-shadow-xl">
          <Input name="email" type="email" />
          <Input name="password" type="password" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
