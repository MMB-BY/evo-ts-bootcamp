import React, { Component } from "react";
import { Pillar } from "./components/pillar/Pillar";
import { arrayWithRandomValues } from "./utils/arrayWithRandomValues";
import { bubbleSort, Sorted } from "./utils/bubbleSort";
import "./App.css";
import "./components/pillar/pillar.css";

interface AppProps {}
interface AppState {
  sortingArray: number[];
  status: string;
  delay: number;
  alreadySorted?: boolean;
}

export class App extends Component<AppProps, AppState> {
  interval: number | undefined;

  state = {
    sortingArray: arrayWithRandomValues(),
    status: "pending",
    delay: 100,
    alreadySorted: Sorted,
  };

  sorting = (): void => {
    this.interval = window.setInterval(() => {
      if (this.state.alreadySorted) {
        this.setState({ status: "SORTED" });
        clearInterval(this.interval);
      } else {
        this.setState({
          sortingArray: bubbleSort(this.state.sortingArray),
          status: "sorting",
          alreadySorted: Sorted,
        });
      }
    }, this.state.delay);
  };

  pause = (): void => {
    if (this.interval) {
      clearInterval(this.interval);
      this.setState(() => ({ status: "pause" }));
    }
  };

  reset = (): void => {
    this.pause();
    this.setState({
      sortingArray: arrayWithRandomValues(),
      status: "reset",
      alreadySorted: false,
    });
  };

  step = (): void => {
    this.pause();
    this.setState({
      sortingArray: bubbleSort(this.state.sortingArray),
      status: "step. pending",
      alreadySorted: Sorted,
    });
  };

  setDelay = (delayDuration: number): void => {
    this.pause();
    this.setState({
      status: "Delay changed. Paused. press SORT button.",
      delay: delayDuration,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="game">
          <div className="title">Bubble Sort</div>
          <div className="pillarContainer">
            <Pillar array={this.state.sortingArray} />
          </div>
          <div className="buttonContainer">
            <button onClick={this.reset}>reset</button>
            <button onClick={this.pause}>pause</button>
            <button onClick={this.step}>step</button>
            <button
              disabled={
                this.state.status === "sorting" ||
                this.state.status === "SORTED"
              }
              onClick={this.sorting}
            >
              sort
            </button>
          </div>
          <div className="status">{this.state.status}</div>
          <div className="delay_section">
            <div className="delay_section_title">Choose interval</div>
            <button className="delay" onClick={() => this.setDelay(50)}>
              50
            </button>
            <button className="delay" onClick={() => this.setDelay(75)}>
              75
            </button>
            <button className="delay" onClick={() => this.setDelay(100)}>
              100
            </button>
            <button className="delay" onClick={() => this.setDelay(150)}>
              150
            </button>
            <button className="delay" onClick={() => this.setDelay(200)}>
              200
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
