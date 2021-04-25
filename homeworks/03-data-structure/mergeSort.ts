export const mergeSort = <T>(array: T[]): T[] => {
  if (array.length < 2) return array;
  const middle = Math.ceil(array.length / 2);
  const leftSide = array.slice(0, middle);
  const rightSide = array.slice(middle);

  return sidesComparison(mergeSort(leftSide), mergeSort(rightSide));
};

export const sidesComparison = <T>(left: T[], right: T[]): T[] => {
  const comparedArr: T[] = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      comparedArr.push(left[0]);
      left.shift();
    } else {
      comparedArr.push(right[0]);
      right.shift();
    }
  }
  return comparedArr.concat(left).concat(right);
};
