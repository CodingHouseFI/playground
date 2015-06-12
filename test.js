var assert = require("assert")

var CH = {};

CH.sum = function (a, b){
  if (Array.isArray(arguments[0])) {
    return Array.prototype.map.call(arguments, function(a){
      if (Array.isArray(a)) {
        return CH.sum.apply(null, a);
        }
      return CH.sum(a);
    });
  }
  return Array.prototype.reduce.call(arguments, function(a, b){
    return a + b || 0;
  }, 0);
};

describe("CH", function(){
  describe("the sum function", function(){
    it("returns the sum of its 2 arguments", function(){
      assert.equal(7, CH.sum(3, 4));
      assert.equal(12, CH.sum(5, 7));
      assert.equal(-1, CH.sum(2,-1,1,-1,2,-2,-2));
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
    it("returns an arrary if arguments are arrays", function(){
      assert.deepEqual([4, 8], CH.sum([2, 2],[3, 5]));
      assert.deepEqual([16, 8],
        CH.sum([2, 2, 2, 2, 2, 2, 2, 2], [3, 5, 1, -1, 1, -1]));
      assert.deepEqual([4, 3, 5], CH.sum([2, 2], 3, 5));
    });

  });
});


// it("returns a single number if arguments are objects" ,function(){
//   assert.equal(3, CH.sum({apples; 1}, {oranges: 2}));
// });
