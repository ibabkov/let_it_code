import chai from 'chai';
let expect = chai.expect;

import { numIslandsUF, numIslandsDFS, numIslandsBFS } from '../index.js'

describe("200. Number of Islands", function() {
  const tests = [
    {fn: numIslandsUF },
    {fn: numIslandsDFS },
    {fn: numIslandsBFS },
  ];

  tests.forEach(({ fn }) => {
    it(`${fn.name} should return valid value`, function() {
      const arg1 = [
        ["1","1","0","0","0"],
        ["1","1","0","0","0"],
        ["0","0","1","0","0"],
        ["0","0","0","1","1"],
      ];
      const arg2 = [
        ["1","1","1"],
        ["0","1","0"],
        ["1","1","1"],
      ];
      expect(fn(arg1)).to.equal(3);
      expect(fn(arg2)).to.equal(1);
    });
  });
});