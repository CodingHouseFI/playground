var expect = require('chai').expect;
var Counter = require("../counters/js/counter.js");

var counts1 = Counter.count("TDD for the win");
var counts2 = Counter.count("and BDD is better, y0");
var counts3 = Counter.count("");
var counts4 = Counter.count("this is p1\n\nthis is p2\n1 here");
var counts5 = Counter.count("this is p1\n\n\n");
var counts6 = Counter.count("word\nword");

describe("Counter", function() {
  describe("count", function() {
    it("counts characters", function() {
      expect(counts1.characters).to.equal(15);
      expect(counts2.characters).to.equal(21);
      expect(counts3.characters).to.equal(0);
    });
    it("counts words", function() {
      expect(counts1.words).to.equal(4);
      expect(counts2.words).to.equal(5);
      expect(counts3.words).to.equal(0);
      expect(counts6.words).to.equal(2);
    });
    it("counts spaces", function() {
      expect(counts1.spaces).to.equal(3);
      expect(counts2.spaces).to.equal(4);
    });
    it("counts numbers", function() {
      expect(counts1.numbers).to.equal(0);
      expect(counts2.numbers).to.equal(1);
    });
    it("counts paragraphs", function() {
      expect(counts1.paragraphs).to.equal(1);
      expect(counts2.paragraphs).to.equal(1);
      expect(counts3.paragraphs).to.equal(0);
      expect(counts4.paragraphs).to.equal(3);
      expect(counts5.paragraphs).to.equal(1);
    });
  });
});
