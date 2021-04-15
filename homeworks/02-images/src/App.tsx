import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ImagesScreen } from "./components/images/Images";

function App() {
  return (
    <div className="container">
      <div className="search">
        <h1 className="logo">YNDX</h1>
        <form className="searchingForm" action="">
          <input type="text" name="" id="" placeholder="formula 1" />
          <input type="button" value="search" />
        </form>
      </div>
      <ImagesScreen />
    </div>
  );
}

export default App;
