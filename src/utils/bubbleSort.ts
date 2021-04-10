export let Sorted: boolean = false;

export function bubbleSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
        let bubble = 0;
        if (arr[i+1] < arr[i]) {
          bubble = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = bubble;
          return arr;
        }
    }
    Sorted = true;
    return arr;
  }
  