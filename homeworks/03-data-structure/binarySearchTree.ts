interface Node<T> {
  data: T;
  left: Node<T> | null;
  right: Node<T> | null;
}

export class BinarySearchTree<T> {
  public root: Node<T> | undefined;

  private createNode = (data: T): Node<T> => {
    return {
      data,
      left: null,
      right: null,
    };
  };

  private insertNode = (currentNode: Node<T>) => {
    const data = currentNode.data;
    const recursiveFreePlaceFinder = (node: Node<T>) => {
      if (data > node.data) {
        if (!node.right) {
          node.right = currentNode;
        } else {
          recursiveFreePlaceFinder(node.right);
        }
      } else if (data < node.data) {
        if (!node.left) {
          node.left = currentNode;
        } else {
          recursiveFreePlaceFinder(node.left);
        }
      }
    };
    recursiveFreePlaceFinder(this.root as Node<T>);
  };

  public insert = (data: T) => {
    const currentNode = this.createNode(data);
    if (!this.root) {
      this.root = currentNode;
    } else {
      this.insertNode(currentNode);
    }
  };

  public preOrderTree(): T[] {
    const result: T[] = [];
    const recursivePrePushing = (node: Node<T>) => {
      result.push(node.data);
      if (node.left) {
        recursivePrePushing(node.left);
      }
      if (node.right) {
        recursivePrePushing(node.right);
      }
    };
    recursivePrePushing(this.root as Node<T>);
    return result;
  }

  public getMin = (): Node<T> | T => {
    const rootNode: Node<T> = this.root as Node<T>;
    const recursiveLeftNodeChecker = (node: Node<T>): Node<T> | T => {
      if (!node.left) {
        return node.data;
      } else {
        return recursiveLeftNodeChecker(node.left);
      }
    };
    return recursiveLeftNodeChecker(rootNode);
  };

  public getMax = (): Node<T> | T => {
    const rootNode: Node<T> = this.root as Node<T>;
    const recursiveRightNodeChecker = (node: Node<T>): Node<T> | T => {
      if (!node.right) {
        return node.data;
      } else {
        return recursiveRightNodeChecker(node.right);
      }
    };
    return recursiveRightNodeChecker(rootNode);
  };

  public contains = (data: T): boolean => {
    const recursiveContainsChecker = (node: Node<T>): undefined | boolean => {
      if (!node) return false;
      if (data === node.data) {
        return true;
      }
      if (data > node.data) {
        return recursiveContainsChecker(node.right as Node<T>);
      }
      if (data < node.data) {
        return recursiveContainsChecker(node.left as Node<T>);
      }
    };
    const rootNode: Node<T> | undefined = this.root;
    return recursiveContainsChecker(rootNode as Node<T>)!;
  };
}
