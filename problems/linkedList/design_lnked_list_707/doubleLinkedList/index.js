class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
const MyLinkedList = function() {
  this.head = this.tail = null;
  this.length = 0;
};


MyLinkedList.prototype._getNode = function(index) {
  let leftNode = this.head;
  let rightNode = this.tail;
  let left = 0;
  let right = this.length - 1;

  if ((index < 0 || index >= this.length)) return undefined;

  while (left !== index && right !== index) {
    rightNode = rightNode.prev;
    leftNode = leftNode.next;
    left++;
    right--;
  }

  return left === index ? leftNode : rightNode;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  let node = this._getNode(index);

  return typeof node !== 'undefined' ? node.val : -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  const node = new Node(val);

  if (!this.head) {
    this.head = this.tail = node
  } else {
    node.next = this.head;
    this.head = node.next.prev = node;
  }

  this.length++;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  const node = new Node(val);

  if (!this.head) {
    this.head = this.tail = node
  } else {
    const prev = node.prev = this.tail;
    this.tail = prev.next = node;
  }

  this.length++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  let node = this._getNode(index);

  if (!!node) {
    const newNode = new Node(node.val);
    newNode.next = node.next;
    newNode.prev = node;
    node.next = newNode;
    node.val = val;
    if (index === this.length - 1) this.tail = newNode;

    this.length++;
  } else if (index === this.length || !this.length) {
    this.addAtTail(val);
  }
};

MyLinkedList.prototype.addAtIndex = function(index, val) {
  let node = this._getNode(index);

  if (!!node) {
    const newNode = new Node(node.val);
    newNode.next = node.next;
    newNode.prev = node;
    node.next = newNode;
    node.val = val;
    if (index === this.length - 1) this.tail = newNode;

    this.length++;
  } else if (index === this.length || !this.length) {
    this.addAtTail(val);
  }
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  let node = this._getNode(index);

  if (!!node) {
    const newNode = new Node(node.val);
    newNode.next = node.next;
    newNode.prev = node;
    if (node.next) node.next.prev = newNode;
    node.next = newNode;
    node.val = val;
    if (index === this.length - 1) this.tail = newNode;

    this.length++;
  } else if (index === this.length || !this.length) {
    this.addAtTail(val);
  }
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  let node = this._getNode(index);

  if (!node) return;
  if (this.length === 1) this.tail = this.head = null;
  if (node.next) {
    node.next.prev = node.prev;
  } else {
    this.tail = node.prev;
  }
  if (node.prev) {
    node.prev.next = node.next;
  } else {
    this.head = node.next;
  }

  this.length--;
};

export { MyLinkedList };