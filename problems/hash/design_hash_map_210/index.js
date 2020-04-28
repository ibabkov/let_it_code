

/**
 * @link https://leetcode.com/problems/design-hashmap/
 * @description
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
const MyHashMap = function(length) {
  this.hashMap = new Array();
};

/**
 * get index of array from key string
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, val) {
  this.hashMap[key] = val;
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
  const item = this.hashMap[key];

  return typeof item === 'undefined' ? -1 : item;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
  if (!this.hashMap[key]) return;

  delete this.hashMap[key];
};

export { MyHashMap };