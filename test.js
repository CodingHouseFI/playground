var assert = require("assert")

var CH = {};

CH.sum = function (a, b){
  return Array.prototype.reduce.call(arguments, function(a, b){
    return (a || 0) + (b || 0);
  }, 0);
};

describe("CH", function(){
  describe("the sum function", function(){
    it("returns the sum of its 2 arguments", function(){
      assert.equal(7, CH.sum(3, 4));
      assert.equal(12, CH.sum(5, 7));
    });
    it("returns 0 when no argumetns are present", function(){
      assert.equal(0, CH.sum());
    });
    it("returns one argument with only one argument", function(){
      assert.equal(3, CH.sum(3));
      assert.equal(3, CH.sum(undefined, 3));
      assert.equal(3, CH.sum(null, 3));
      assert.equal(3, CH.sum(NaN, 3));
    });
  });
});
