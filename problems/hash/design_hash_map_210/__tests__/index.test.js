import chai from 'chai';
let expect = chai.expect;

import { MyHashMap } from '../index.js'

describe("706. Design HashMap", function() {
  it("Should not has 1 value in a set", function() {
    const hashMap = new MyHashMap();
    hashMap.put(1, 1);
    hashMap.put(2, 2);
    hashMap.get(1);            // returns 1
    hashMap.get(3);            // returns -1 (not found)
    hashMap.put(2, 1);          // update the existing value
    hashMap.get(2);            // returns 1
    hashMap.remove(2);          // remove the mapping for 2
    hashMap.get(2);
    // expect(obj.contains(1)).to.be.false;
  });
  it("get(value) should return value if it exists", function() {
    const hashMap = new MyHashMap();
    hashMap.put(1, 1);
    hashMap.put(2, 2);
    hashMap.get(1);
    expect(hashMap.get(1)).to.equal(1);
  });
  it("get(value) should return -1 if it not exists", function() {
    const hashMap = new MyHashMap();
    hashMap.put(1, 1);
    hashMap.put(2, 2);
    expect(hashMap.get(3)).to.equal(-1);
  });
  it("get(value) should return -1 if value was deleted", function() {
    const hashMap = new MyHashMap();
    hashMap.put(2, 2);
    hashMap.remove(2);
    expect(hashMap.get(2)).to.equal(-1);
  });
});