var expect = require('chai').expect
var lib1 = require('./lib1');
describe('function1',function(){
  it('should return param2 if param2 is defined',function(){
    expect(lib1.function1(1,2)).to.equal(2);
  });

  it('should return param1 if param2 is not defined',function(){
    expect(lib1.function1(1)).to.equal(1);
  });
});
