class Node {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinarySearchTree {
	constructor(root = null) {
		this.root = root;
	}

	/** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

	insert(val) {
		let newNode = new Node(val);
		if (!this.root) this.root = newNode;
		else {
			let queue = [ this.root ];
			while (queue.length) {
				let current = queue.shift();
				if (newNode.val < current.val) {
					if (current.left === null) {
						current.left = newNode;
					}
					queue.push(current.left);
				}
				if (newNode.val > current.val) {
					if (current.right === null) {
						current.right = newNode;
					}
					queue.push(current.right);
				}
			}
		}
		return this;
	}

	/** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

	insertRecursively(val) {
		let newNode = new Node(val);
		if (!this.root) this.root = newNode;

		function insert(node) {
			if (newNode.val < node.val) {
				if (node.left === null) node.left = newNode;
				return insert(node.left);
			}
			if (newNode.val > node.val) {
				if (node.right === null) node.right = newNode;
				return insert(node.right);
			}
		}
		insert(this.root);
		return this;
	}

	/** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

	find(val) {
		if (!this.root) return undefined;
		let stack = [ this.root ];
		while (stack.length) {
			let current = stack.pop();
			if (val === current.val) return current;
			if (val < current.val && current.left !== null) stack.push(current.left);
			if (val > current.val && current.right !== null) stack.push(current.right);
		}
	}

	/** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

	findRecursively(val) {
		if (!this.root) return undefined;
		function find(node) {
			if (val === node.val) return node;
			if (val < node.val && node.left !== null) return find(node.left);
			if (val > node.val && node.right !== null) return find(node.right);
		}
		return find(this.root);
	}

	/** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

	dfsPreOrder(node = this.root, visited = []) {
		visited.push(node.val);

		if (node.left) this.dfsPreOrder(node.left, visited);
		if (node.right) this.dfsPreOrder(node.right, visited);

		return visited;
	}

	/** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

	dfsInOrder(visited = []) {
		function traverse(node) {
			if (node.left) traverse(node.left);
			visited.push(node.val);
			if (node.right) traverse(node.right);
		}

		traverse(this.root);

		return visited;
	}

	/** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

	dfsPostOrder(visited = []) {
		function traverse(node) {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			visited.push(node.val);
		}
		traverse(this.root);
		return visited;
	}

	/** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

	bfs(visited = []) {
		let queue = [ this.root ];
		while (queue.length) {
			let current = queue.shift();
			visited.push(current.val);
			if (current.left) queue.push(current.left);
			if (current.right) queue.push(current.right);
		}
		return visited;
	}
}

module.exports = BinarySearchTree;
