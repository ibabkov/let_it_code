class Node{
  constructor(value, prev = null){
    this.value = value;
    this.prev = prev;
    this.prevMin = null;
  }
}

/**
 * initialize your data structure here.
 */
export const MinStack = function() {
  this._stack = [];
  this.minNode = null;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  const node = new Node(x, this.last);
  const minValue = this.minNode ? this.minNode.value : Infinity;

  if (x < minValue) {
    node.prevMin = this.minNode;
    this.minNode = node;
  }

  this._stack.push(node);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const node = this._stack.pop();

  if (node === this.minNode) this.minNode = node.prevMin;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  const last = this._stack[this._stack.length - 1];

  return last ? last.value : null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minNode ? this.minNode.value :null
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */