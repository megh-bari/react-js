import { useCallback, useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone } from '@fortawesome/free-regular-svg-icons'; 
import { faCheck } from '@fortawesome/free-solid-svg-icons'; 

function App() {
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
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="w-full max-w-md px-10 py-5 bg-white rounded-xl shadow-2xl">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Password Generator
        </h1>
        <div className="mb-6">
          <div className="flex rounded-md overflow-hidden border border-gray-300">
            <input
              type="text"
              value={password}
              className="flex-grow px-4 py-2 text-gray-800 focus:outline-none"
              placeholder="password"
              readOnly
              ref={passwordReference}
            />
            <button
              className="bg-blue-500 text-white px-5 py-3 hover:bg-blue-600 transition duration-200 flex items-center"
              onClick={copyPassword}
            >
              <FontAwesomeIcon icon={buttonIcon} className="mr-2" /> 
              {buttonText}
            </button>
          </div>
        </div>
        <div className="space-y-4">
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
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="uppercaseInput"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase((prev) => !prev)}
              className="rounded text-blue-500 focus:ring-blue-500"
            />
            <label htmlFor="uppercaseInput" className="text-sm font-semibold text-gray-700">
              Include Uppercase
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="lowercaseInput"
              checked={includeLowercase}
              onChange={() => setIncludeLowercase((prev) => !prev)}
              className="rounded text-blue-500 focus:ring-blue-500"
            />
            <label htmlFor="lowercaseInput" className="text-sm font-semibold text-gray-700">
              Include Lowercase
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="numberInput"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers((prev) => !prev)}
              className="rounded text-blue-500 focus:ring-blue-500"
            />
            <label htmlFor="numberInput" className="text-sm font-semibold text-gray-700">
              Include Numbers
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="characterInput"
              checked={includeSpecialChars}
              onChange={() => setIncludeSpecialChars((prev) => !prev)}
              className="rounded text-blue-500 focus:ring-blue-500"
            />
            <label htmlFor="characterInput" className="text-sm font-semibold text-gray-700">
              Include Special Characters
            </label>
          </div>
          <div className="flex justify-center">
            <p className="font-semibold">
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
    </div>
  );
}

export default App;