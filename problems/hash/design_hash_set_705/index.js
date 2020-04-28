
/**
 * @link https://leetcode.com/problems/design-hashset/
 * @description
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
const MyHashSet = function() {
  this.hashSet = new Array();
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
  this.hashSet[key] = key;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
  if (typeof this.hashSet[key] === 'undefined') return;

  delete this.hashSet[key];
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
  return typeof this.hashSet[key] !== 'undefined';
};

export { MyHashSet };
