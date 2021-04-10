import React, { Component } from 'react';
import {Pillar} from './components/pillar/pillar';
import {arrayWithRandomValues} from "./utils/arrayWithRandomValues"
import './App.css';
import './components/pillar/pillar.css';
import {bubbleSort, Sorted} from "./utils/bubbleSort";
const delay = 100;
interface PropsInterface {
}
interface AppInterface {
  arr: number[];
  status: string;
}

export class App extends Component<PropsInterface,AppInterface>{
  interval: NodeJS.Timer | undefined;

    state = { 
      arr:  arrayWithRandomValues(),
      status: 'pending'
    };
  
  sorting = () => {
    this.interval = setInterval(() => {
        this.setState({arr: bubbleSort(this.state.arr), status: 'sorting'});
        if (Sorted) {
        this.setState({arr: bubbleSort(this.state.arr), status: 'SORTED'});
        }
    },delay);
  }

  pause = () => {
    if (this.interval) {
      clearInterval(this.interval);
      this.setState(() => ({arr: [1,22,3,45,5], status: 'pause'}))
    }
  }

  render() {
    return (
      <div className="App">
          <div className = "game">
            <div className = "title">Bubble Sort</div>
            <div className = "pillarContainer">
              <Pillar array = {this.state.arr}/>
            </div>
            <div className= "status">{this.state.status}</div>
            <div className = "buttonContainer">
              <button onClick = {() => this.pause()} >pause</button>
              <button onClick = {() => this.sorting()} >sort</button>
            </div>
          </div>
      </div>
    );
}
}

export default App;
