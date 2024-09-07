import { useState } from "react";

function App() {
  const [color, setColor] = useState("grey");

  return (
    <>
      <div
        className="w-full h-screen"
        style={{
          backgroundColor: color,
        }}
      ><div className="fixed flex flex-wrap justify-center top-10 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-1 shadow-xl bg-white px-4 py-2 rounded-3xl">
            Built by <a className="text-blue-500 font-bold" href="http://github.com/megh-bari" target="_blank"> Megh Bari</a>
            </div>
            </div>
       
        <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-5 shadow-xl bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => {
                setColor("red");
              }}
              className="outline-none px-6 text-white rounded-full shadow-lg"
              style={{
                backgroundColor: "red",
              }}
            >
              Red
            </button>
            <button
              onClick={() => {
                setColor("green");
              }}
              className="outline-none px-6 py-2 text-white rounded-full shadow-lg"
              style={{
                backgroundColor: "green",
              }}
            >
              Green
            </button>
            <button
              onClick={() => {
                setColor("blue");
              }}
              className="outline-none px-6 py-2 text-white rounded-full shadow-lg"
              style={{
                backgroundColor: "blue",
              }}
            >
              Blue
            </button>
            <button
              onClick={() => {
                setColor("orange");
              }}
              className="outline-none px-6 py-2 text-white rounded-full shadow-lg"
              style={{
                backgroundColor: "orange",
              }}
            >
              Orange
            </button>
            <button
              onClick={() => {
                setColor("yellow");
              }}
              className="outline-none px-6 py-2 text-black rounded-full shadow-lg"
              style={{
                backgroundColor: "yellow",
              }}
            >
              Yellow
            </button>
            <button
              onClick={() => {
                setColor("lime");
              }}
              className="outline-none px-6 py-2 text-black rounded-full shadow-lg"
              style={{
                backgroundColor: "lime",
              }}
            >
              Lime
            </button>
            <button
              onClick={() => {
                setColor("aqua");
              }}
              className="outline-none px-6 py-2 text-black rounded-full shadow-lg"
              style={{
                backgroundColor: "aqua",
              }}
            >
              Aqua
            </button>
            <button
              onClick={() => {
                setColor("violet");
              }}
              className="outline-none px-6 py-2 text-black rounded-full shadow-lg"
              style={{
                backgroundColor: "violet",
              }}
            >
              Violet
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
