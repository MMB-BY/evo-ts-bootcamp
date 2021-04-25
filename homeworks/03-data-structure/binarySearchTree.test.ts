import { BinarySearchTree } from "./binarySearchTree";

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(6);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(11);
tree.insert(2);
tree.insert(20);

//              10
//            /    \
//           5      12
//          / \    /  \
//         3   6  11   20
//        /     \
//       2       7
//
//

describe("binary tree pre order traversal", () => {
  it("short tree pre order", () => {
    const testTree = new BinarySearchTree();
    testTree.insert(10);
    testTree.insert(5);
    testTree.insert(15);
    expect(testTree.preOrderTree()).toEqual([10, 5, 15]);
  });

  it("basic tree pre order", () => {
    expect(tree.preOrderTree()).toEqual([10, 5, 3, 2, 6, 7, 12, 11, 20]);
  });
});

describe("binary tree contains", () => {
  it("short return true if tree contains elem", () => {
    expect(tree.contains(2)).toBe(true);
  });

  it("short return true if tree contains elem", () => {
    expect(tree.contains(10)).toBe(true);
  });

  it("short return true if tree contains elem", () => {
    expect(tree.contains(20)).toBe(true);
  });

  it("short return false if tree does not contains elem", () => {
    expect(tree.contains(14)).toBe(false);
  });

  it("short return false if tree does not contains elem", () => {
    expect(tree.contains(4)).toBe(false);
  });

  it("short return false if tree does not contains elem", () => {
    expect(tree.contains(0)).toBe(false);
  });

  it.each([
    [10, true],
    [17, false],
    [12, true],
    [1, false],
    [5, true],
  ])("mixed contains check", (value, expected) => {
    expect(tree.contains(value)).toBe(expected);
  });
});

describe("getMax tests", () => {
  it("should find max number", () => {
    expect(tree.getMax()).toBe(20);
  });

  it("should find max number of new tree", () => {
    const testTree = new BinarySearchTree();
    testTree.insert(10);
    testTree.insert(5);
    testTree.insert(15);
    expect(testTree.getMax()).toBe(15);
  });
});

describe("getMin tests", () => {
  it("should find min number", () => {
    expect(tree.getMin()).toBe(2);
  });

  it("should find min number of new tree", () => {
    const testTree = new BinarySearchTree();
    testTree.insert(10);
    testTree.insert(5);
    testTree.insert(15);
    expect(testTree.getMin()).toBe(5);
  });
});

describe("insert tests", () => {
  it("should insert element", () => {
    tree.insert(1);
    expect(tree.contains(1)).toBe(true);
  });

  it.each([21, 22, -23, 24, -25])("more insert tests", (element) => {
    tree.insert(element);
    expect(tree.contains(element)).toBe(true);
  });
});
