import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  let myObj = {
    name: "megh",
    age: 18,
  };

  let arr = [1, 2, 3, 4];
  return (
    <>
      {/* <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={reactLogo}
          alt=""
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote key="blockquote">
            <p className="text-lg font-medium">
              "Tailwind CSS is the only framework that I've seen scale on large teams. It's easy to customize, adapts to any design, and the build size is tiny."
            </p>
          </blockquote>
          <figcaption key="figcaption" className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div className="text-slate-700 dark:text-slate-500">Staff Engineer, Algolia</div>
          </figcaption>
        </div>
      </figure> */}

      <Card username="Megh" btnText="Click Me" para="Hello I'm React Js Dev"/>
      <Card username="Nobody" btnText="Click Me" para="Hello I'm React Js Dev"/>
      <Card username="HelloWorld"  para="Hello I'm React Js Dev" />
    </>
  );
}

export default App;
