import chai from 'chai';
let expect = chai.expect;

import { MyHashSet } from '../index.js'

describe("705. Design HashSet", function() {
  it("Should not has 1 value in a set", function() {
    const obj = new MyHashSet();
    obj.add(1);
    obj.remove(1);
    expect(obj.contains(1)).to.be.false;
  });
  it("Should not has value in a set", function() {
    const obj = new MyHashSet();
    obj.add(2);
    expect(obj.contains(2)).to.be.true;
  });
});