import { Component } from "react";
import {bubbleSort} from "../../utils/bubbleSort"

interface PropsInterface {
    array: number[]
}
interface StateInterface {
    arr: number[];
}

export class Pillar extends Component<PropsInterface, StateInterface> {
    arr = this.props.array;
    state = { arr:  this.props.array };
    
   
  componentDidMount() {
    let arr = this.state.arr;
    setInterval(() => {
      this.setState({arr: bubbleSort(arr)})
    },80);
  }

  componentWillUnmount() {}

  render() { 
    return this.state.arr.map(el => <div className='pillar' style={{height: el+'px'}}></div>);
  }
}