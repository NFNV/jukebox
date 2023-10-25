import React from "react";
import { render } from "react-dom";

function App() {
  return <h1>Test</h1>;
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
