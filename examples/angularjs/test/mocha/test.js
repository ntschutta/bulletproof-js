var assert = require("assert");
var fruits = ["apple", "orange", "grape"];
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, fruits.indexOf("kiwi"));
      assert.equal(-1, fruits.indexOf("banana"));
    });
    it('index of 0 should return first value in array', function(){
      assert.equal("apple", fruits[0]);
    });
    it('index of length - 1 should return last value in array', function(){
      assert.equal("grape", fruits[fruits.length - 1]);
    });
    it('index of length should return null', function(){
      assert.equal(null, fruits[fruits.length]);
    });
    it('push adds a new element at the end of an array and returns the new length of the array', function(){
      var newlength = fruits.push("kiwi");
      assert.equal("kiwi", fruits[fruits.length - 1]);
      assert.equal(4, fruits.length);
      assert.equal(4, newlength);
    });
    it('pop removes the last element of an array and returns it', function(){
      var last = fruits.pop();
      assert.equal("kiwi", last);
      assert.equal(3, fruits.length);
    });
  })
})
