import React, { useCallback, useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone } from '@fortawesome/free-regular-svg-icons'; 
import { faCheck } from '@fortawesome/free-solid-svg-icons'; 

const App = () => {
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState('Copy');
  const [buttonIcon, setButtonIcon] = useState(faClone);
  const passwordReference = useRef(null);

  const copyPassword = useCallback(() => {
    passwordReference.current?.select();
    window.navigator.clipboard.writeText(password);
    changeText(); 
  }, [password]);

  const changeText = () => {
    setButtonText("Copied!");
    setButtonIcon(faCheck);
    setTimeout(() => {
      setButtonText("Copy"); 
      setButtonIcon(faClone);
    }, 2000);
  };

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "";

    if (includeUppercase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) str += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) str += "0123456789";
    if (includeSpecialChars) str += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

    if (str.length === 0) {
      str = "abcdefghijklmnopqrstuvwxyz"; 
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars]);

  useEffect(() => {
    passwordGenerator(); 
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars, passwordGenerator]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-6 space-y-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
          Password Generator
        </h1>
        <div className="space-y-4">
          <div className="flex rounded-md overflow-hidden border border-gray-300">
            <input
              type="text"
              value={password}
              className="flex-grow px-3 py-2 text-sm sm:text-base text-gray-800 focus:outline-none w-0 min-w-0"
              placeholder="password"
              readOnly
              ref={passwordReference}
            />
            <button
              className="bg-blue-500 text-white px-2 sm:px-4 py-2 hover:bg-blue-600 transition duration-200 flex items-center justify-center whitespace-nowrap text-xs sm:text-sm"
              onClick={copyPassword}
            >
              <FontAwesomeIcon icon={buttonIcon} className="mr-1 sm:mr-2" /> 
              <span className="hidden xs:inline">{buttonText}</span>
            </button>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password Length: {length}
            </label>
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))} 
              className="w-full cursor-pointer"
            />
          </div>
          <div className="space-y-2">
            {[
              { id: "uppercaseInput", label: "Include Uppercase", state: includeUppercase, setter: setIncludeUppercase },
              { id: "lowercaseInput", label: "Include Lowercase", state: includeLowercase, setter: setIncludeLowercase },
              { id: "numberInput", label: "Include Numbers", state: includeNumbers, setter: setIncludeNumbers },
              { id: "characterInput", label: "Include Special Characters", state: includeSpecialChars, setter: setIncludeSpecialChars }
            ].map(({ id, label, state, setter }) => (
              <div key={id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={id}
                  checked={state}
                  onChange={() => setter((prev) => !prev)}
                  className="rounded text-blue-500 focus:ring-blue-500"
                />
                <label htmlFor={id} className="text-sm font-semibold text-gray-700">
                  {label}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <p className="font-semibold text-center text-sm">
            Built by{" "}
            <a
              className="font-bold text-blue-700 hover:text-blue-600 transition duration-200"
              target="_blank"
              rel="noopener noreferrer" 
              href="http://github.com/megh-bari"
            >
              Megh Bari
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;