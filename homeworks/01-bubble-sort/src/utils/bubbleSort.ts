import {randomValue} from './randomValueGenerator';

export function bubbleSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
      // for (let j = i; j < arr.length; j++) {
        let bubble = 0;
        if (arr[i+1] < arr[i]) {
          bubble = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = bubble;
          return arr;
        }
      // }
    }
    return arr;
  }
  