import { useState, useEffect } from "react";
import { ThemeProvider } from "./Context/Theme";
import ToggleButton from "./Components/ToggleButton";
import Card from "./Components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // Change the theme based on themeMode
  useEffect(() => {
    const htmlElement = document.querySelector("html");
    htmlElement.classList.remove("light", "dark");
    htmlElement.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-col justify-center items-center m-10">
        {/* Centered Theme Toggle Button */}
        <ToggleButton />

        {/* Card Container */}
        <div className="flex justify-center items-center">
          <Card />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
