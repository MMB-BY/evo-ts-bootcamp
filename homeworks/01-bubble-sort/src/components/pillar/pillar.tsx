import { Component } from "react";
import {bubbleSort} from "../../utils/bubbleSort"

interface PropsInterface {
    array: number[];
}
interface StateInterface {
    arr: number[];
}

export class Pillar extends Component<PropsInterface, StateInterface> {
    state = { arr:  this.props.array };
    
   
  componentDidMount() {

  }

  componentWillUnmount() {}

  render() { 
    return this.state.arr.map(el => <div className='pillar' style={{height: el+'px'}}></div>);
  }
}