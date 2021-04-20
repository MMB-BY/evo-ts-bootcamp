export let Sorted: boolean = false;

export function bubbleSort(arr: number[]): number[] {
  Sorted = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let bubble = 0;
      if (arr[j + 1] < arr[j]) {
        bubble = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = bubble;
        return arr;
      }
    }
  }
  Sorted = true;
  return arr;
}
