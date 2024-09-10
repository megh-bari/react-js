import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

const userName = " megh_bari"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  userName
)



createRoot(document.getElementById("root")).render(
  
  reactElement
   
);
