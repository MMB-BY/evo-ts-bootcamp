import { Component } from "react";
interface PillarProps {
  array: number[];
}
interface PillarState {
  arr: number[];
}

export class Pillar extends Component<PillarProps, PillarState> {
  render() {
    return this.props.array.map((el, index) => (
      <div key={index} className="pillar" style={{ height: el + "px" }}></div>
    ));
  }
}
