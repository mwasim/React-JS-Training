import React, { useState } from "react";
import ReactSwitch from "react-switch";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

  //console.log(`Password: ${password}`);

  const generatePassword = () => {
    const lowerCaseChars = `abcdefghijklmnopqrstuvwxyz`;
    const upperCaseChars = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    const numbers = `1234567890`;
    const specialChars = `!@#$%^&*()`;

    let validChars = lowerCaseChars;

    if (includeUpperCase) validChars += upperCaseChars;
    if (includeNumbers) validChars += numbers;
    if (includeSpecialChars) validChars += specialChars;

    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars.charAt(randomIndex);
    }

    //console.log(`random password: ${generatedPassword}`);

    setPassword(generatedPassword);
  };

  return (
    <div className="pt-8 text-white font-bold">
      <div className="flex flex-col items-center">
        <div className="bg-purple-800 w-[350px] shadow-2xl hover:shadow-blue-900 rounded-md p-3">
          <div className="mb-4 flex items-center justify-between">
            <label>Password Length:</label>
            <input
              className="w-12 bg-purple-700 pl-2"
              type="number"
              value={passwordLength}
              onChange={(e) => setPasswordLength(Number(e.target.value))}
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label>Include Uppercase:</label>
            <ReactSwitch
              height={20}
              width={40}
              handleDiameter={18}
              checked={includeUpperCase}
              onChange={() => setIncludeUpperCase(!includeUpperCase)}
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label>Include Numbers:</label>
            <ReactSwitch
              height={20}
              width={40}
              handleDiameter={18}
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label>Include Special Characters:</label>
            <ReactSwitch
              height={20}
              width={40}
              handleDiameter={18}
              checked={includeSpecialChars}
              onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
            />
          </div>
          <button
            onClick={generatePassword}
            className="p-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 pt-2 text-white font-bold rounded-md"
          >
            Generate Password
          </button>
          {password && (
            <p className="font-normal text-white mt-2">
              Generated Password: <span className="font-bold">{password}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
