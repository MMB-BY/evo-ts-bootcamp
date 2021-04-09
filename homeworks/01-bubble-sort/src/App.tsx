import React from 'react';
import {Pillar} from './components/pillar/pillar';
import {arrayWithRandomValues} from "./utils/arrayWithRandomValues"

// import {CreateElements} from './components/createElements';
import logo from './logo.svg';
import './App.css';
import './components/pillar/pillar.css';

function App() {
  return (
    <div className="App">
        <div className = "game">
          <div className = "title">Bubble Sort</div>
          <div className = "pillarContainer">
            <Pillar array = {arrayWithRandomValues()}/>
          </div>
        </div>
    </div>
  );
}

export default App;
