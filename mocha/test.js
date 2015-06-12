var assert = require("assert")
var CH = {};

CH.sum = function(a, b) {
  // assert.deepEqual([4, 8], CH.sum([2, 2], [3, 5]));
  // a = [2,2] => 4 => sum(2,2) | sum.apply(null, [2,2])
  // b = [3,5] => 8
  // [4,8]

  // CH.sum.apply(null, everyArrayArgument)
  // CH.sum.apply(null, a)
  // CH.sum.apply(null, b)
  // [a, b] => [CH.sum.apply(null, a), CH.sum.apply(null, b)]

  // return arguments.map(function(oneArg) {
  //   return CH.sum.apply(null, oneArg);
  // });
  if (Array.isArray(arguments[0])) {
    return Array.prototype.map.call(arguments, function(oneArg) {
      return CH.sum.apply(null, oneArg);
    });
  }

  return Array.prototype.reduce.call(arguments, function(total, e) {
    return total + e || 0;
  }, 0);
}

describe('CH', function() {
  describe('the sum function', function() {
    it("returns the sum of its X arguments", function() {
      assert.equal(7, CH.sum(3, 4));
      assert.equal(-1, CH.sum(0, -1));
      assert.equal(-1, CH.sum(2, -1, 1, -1, 2, -2, -2));
      assert.equal(-1, CH.sum.apply(null, [2, -1, 1, -1, 2, -2, -2]));
      assert.equal(-1, CH.sum.call(null, 2, -1, 1, -1, 2, -2, -2));
    });
    it("returns zero when no arguments are present", function() {
      assert.equal(0, CH.sum());
    });
    it("returns one argument if the other is missing", function() {
      assert.equal(3, CH.sum(3));
      assert.equal(3, CH.sum(undefined, 3));
      assert.equal(3, CH.sum(null, 3));
      assert.equal(3, CH.sum(NaN, 3));
      assert.equal(3, CH.sum(false, 3));
      assert.equal(3, CH.sum("", 3));
    });
    it("returns an array that sums individually passed arrays", function() {
      assert.deepEqual([4, 8], CH.sum([2, 2], [3, 5]));
      assert.deepEqual([16, 8],
                       CH.sum([2, 2, 2, 2, 2, 2, 2, 2], [3, 5, 1, -1, 1, -1]));
    });
  });
});
