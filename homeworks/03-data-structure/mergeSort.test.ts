import { mergeSort, sidesComparison } from "./mergeSort";

describe("mergeSort function tests", () => {
  it("should sort basic array", () => {
    const testArray = [1, 6, 3, 75, 238, 32, 8, 23, 54, 9, 21];
    expect(mergeSort(testArray)).toEqual([
      1,
      3,
      6,
      8,
      9,
      21,
      23,
      32,
      54,
      75,
      238,
    ]);
  });
  

  it("should sort an array with negative numbers", () => {
    const testArray = [-1, 6, 3, -75, 238, 32, -8, 23, -54, 9, 21];
    expect(mergeSort(testArray)).toEqual([
      -75,
      -54,
      -8,
      -1,
      3,
      6,
      9,
      21,
      23,
      32,
      238,
    ]);
  });

  it("should sort an array of equal numbers", () => {
    const testArray = [1, 1, 1, 1, 1, 1, 1];
    expect(mergeSort(testArray)).toEqual([1, 1, 1, 1, 1, 1, 1]);
  });

  it.each([
    [
      [1, 5, 2, 4, 3],
      [1, 2, 3, 4, 5],
    ],
    [
      [5, 2, 4, 1, 3],
      [1, 2, 3, 4, 5],
    ],
    [
      [-1, -1, -2, -1, -1],
      [-2, -1, -1, -1, -1],
    ],
    [
      [1, 2, 0, 40, 5],
      [0, 1, 2, 5, 40],
    ],
    [[], []],
  ])("5 more tests", (array, expected) => {
    expect(mergeSort(array)).toEqual(expected);
  });
});

describe("sidesComparison function tests", () => {
  it("should merge 2 arrays", () => {
    const testArrayFirst = [1, 2, 4];
    const testArraySecond = [3, 5, 6];
    expect(sidesComparison(testArrayFirst, testArraySecond)).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
    ]);
  });

  it("should merge with empty array", () => {
    const testArrayFirst: number[] = [];
    const testArraySecond = [1, 5, 2, 6];
    expect(sidesComparison(testArrayFirst, testArraySecond)).toEqual([
      1,
      5,
      2,
      6,
    ]);
  });
});
