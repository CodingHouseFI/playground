var expect = require('chai').expect;
var Counter = require("../counters/js/counter.js");

var counts1 = Counter.count("TDD for the win");
var counts2 = Counter.count("and BDD is better, y0");

describe("Counter", function() {
  describe("count", function() {
    it("counts characters", function() {
      expect(counts1.characters).to.equal(15);
      expect(counts2.characters).to.equal(20);
    });
    it("counts words", function() {
      expect(counts1.words).to.equal(4);
      expect(counts2.words).to.equal(5);
    });
    it("counts spaces", function() {
      expect(counts1.spaces).to.equal(3);
      expect(counts2.spaces).to.equal(4);
    });
    it("counts numbers", function() {
      expect(counts1.numbers).to.equal(0);
      expect(counts2.numbers).to.equal(1);
    });
  });
});
