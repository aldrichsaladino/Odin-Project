// Node & Tree - spawn point
//Build a Node class/factory. It should have an attribute for the data it stores as well as its left and right children.
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

//Build a Tree class/factory which accepts an array when initialized. The Tree class should have a root attribute, which uses the return value of buildTree which you’ll write next.
class Tree {
    constructor(array) {
        this.root = this.buildTree(array);
    }

    buildTree(array) {
        const arr = [...new Set(array)].sort((a, b) => a - b); // unique & sorted
        if (arr.length === 0) {
            return null;
        }
        return this.balancedBinarySearchTree(arr, 0, arr.length - 1);
    }

    balancedBinarySearchTree(arr, start, end) {
        if (start > end) {
            return null;
        }
        const mid = Math.floor((start + end) / 2);
        const node = new Node(arr[mid]);
        node.left = this.balancedBinarySearchTree(arr, start, mid - 1);
        node.right = this.balancedBinarySearchTree(arr, mid + 1, end);
        return node;
    }
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

//test 1
const test = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
prettyPrint(test.root); //tests using prettyprint function that visualizes the tree structure
console.log(test.root.data)


//Write insert(value) and deleteItem(value) functions that insert/delete the given value. You’ll have to deal with several cases for delete, such as when a node has children or not. If you need additional resources, check out these two articles on inserting and deleting, or this video on BST inserting/removing with several visual examples.
function insert(value):
// why? If the tree is empty, the thenew node becomes the root
    if (this.root === null) {
        this.root = new Node(value);
        return;
    }

    //policy 2; duplictates are not allowed. if the current node is the same as the root, do nothing
    currentNode = this.root;
    while(true) {
        if (value === currentNode.data) {
            return; // no duplicates allowed
        }
    }
    //policy 3; if the value is less than the current node, go left
    if(value < currentNode.data) {
        if(currentNode.left === null) {
            currentNode.left = new Node(value);
            return;
        }
    }

    //policy 4; if the value is greater than the current node, go right
    if(value > currentNode.data) {
        if(currentNode.right === null) {
            currentNode.right = new Node(value);
            return;
        }
        currentNode = currentNode.right;
    }

//Delete function
function deleteItem(value) {
    currentNode = this.root;
    if(currentNode === null) {
        return null; // tree is empty
    }

    if (value < currentNode.data) {
        currentNode.left = deleteItem(currentNode.left, value);
        return currentNode;
    } else if (value > currentNode.data) {
        currentNode.right = deleteItem(currentNode.right, value);
        return currentNode;
    } else {
        //Cases - no child, one child, 2 child
        //no child
        if(currentNode.left === null && currentNode.right === null) {
            return null;
        }

        //one child
        if(currentNode.left = null) {
            return currentNode.right;
        } else if (currentNode.right === null) {
            return currentNode.left;
        }
        //two children
        successor = findMin(currentNode.right);
        currentNode.data = successor.data;
        currentNode.right = deleteItem(currentNode.right, successor.data);
        return currentNode;
    }

}

function findMin(node) {
    while(node.left !== null) {
        node = node.left;
    }
    return node;
}

//Write a find(value) function that returns the node with the given value.

//Write a levelOrderForEach(callback) function that accepts a callback function as its parameter. levelOrderForEach should traverse the tree in breadth-first level order and call the callback on each node as it traverses, passing the whole node as an argument, similarly to how Array.prototype.forEach might work for arrays. levelOrderForEach may be implemented using either iteration or recursion (try implementing both!). If no callback function is provided, throw an Error reporting that a callback is required. Tip: You will want to use an array acting as a queue to keep track of all the child nodes that you have yet to traverse and to add new ones to the list (video on level order traversal).

//Write inOrderForEach(callback), preOrderForEach(callback), and postOrderForEach(callback) functions that also accept a callback as a parameter. Each of these functions should traverse the tree in their respective depth-first order and pass each node to the provided callback. The functions should throw an Error if no callback is given as an argument, like with levelOrderForEach. The video Binary Tree Traversal: Preorder, Inorder, Postorder explains the topic clearly.

//Write a height(value) function that returns the height of the node containing the given value. Height is defined as the number of edges in the longest path from that node to a leaf node. If the value is not found in the tree, the function should return null.

//Write a depth(value) function that returns the depth of the node containing the given value. Depth is defined as the number of edges in the path from that node to the root node. If the value is not found in the tree, the function should return null.

//Write an isBalanced function that checks if the tree is balanced. A binary tree is considered balanced if, for every node in the tree, the height difference between its left and right subtrees is no more than 1, and both the left and right subtrees are also balanced.

//Pitfall with checking balance
//A common mistake is only checking the height difference between the root’s left and right children. That is not enough — you must check the balance condition for every node.

//Write a rebalance function that rebalances an unbalanced tree. Tip: You’ll want to use a traversal method to provide a new array to the buildTree function.
