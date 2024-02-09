import React from "react";

const LoginPage = () => {
  return (
    <div className="bg-blue-600 h-[100vh] flex items-center justify-center p-10">
      <div className="w-full md:w-[450px]">
        <h1 className="text-white text-center font-bold text-4xl md:text-6xl mb-10">
          Login
        </h1>
        <div className="bg-white w-full p-6 min-h-[150px] flex flex-col gap-3 rounded-xl drop-shadow-xl">
          <input
            type="text"
            className="flex-1 bg-transparent border-2 border-gray-300 rounded-full px-3 py-1 placeholder-gray-300"
            placeholder="Enter name"
          />
          <input
            type="text"
            className="flex-1 bg-transparent border-2 border-gray-300 rounded-full px-3 py-1 placeholder-gray-300"
            placeholder="Enter name"
          />
          <input
            type="text"
            className="flex-1 bg-transparent border-2 border-gray-300 rounded-full px-3 py-1 placeholder-gray-300"
            placeholder="Enter name"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
