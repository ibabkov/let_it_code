import chai from 'chai';
let expect = chai.expect;

import { fibRecursive, fibIterative, fibMath } from '../index.js'

describe("509. Fibonacci Number", function() {
  describe("fibRecursive", function() {
    it("Should return valid fibonacci number", function() {
      expect(fibRecursive(0)).to.equal(0);
      expect(fibRecursive(1)).to.equal(1);
      expect(fibRecursive(2)).to.equal(1);
      expect(fibRecursive(4)).to.equal(3);
      expect(fibRecursive(30)).to.equal(832040);
    });
  });
  describe("fibIterative", function() {
    it("Should return valid fibonacci number", function() {
      expect(fibRecursive(0)).to.equal(0);
      expect(fibRecursive(1)).to.equal(1);
      expect(fibRecursive(2)).to.equal(1);
      expect(fibRecursive(4)).to.equal(3);
      expect(fibRecursive(30)).to.equal(832040);
    });
  });
  describe("fibMath", function() {
    it("Should return valid fibonacci number", function() {
      expect(fibRecursive(0)).to.equal(0);
      expect(fibRecursive(1)).to.equal(1);
      expect(fibRecursive(2)).to.equal(1);
      expect(fibRecursive(4)).to.equal(3);
      expect(fibRecursive(30)).to.equal(832040);
    });
  });
});