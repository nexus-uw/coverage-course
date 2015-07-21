describe('lib1-service: ', function () {
  beforeEach(module('lib1'));
  var lib1;
  beforeEach(inject(function ($injector) {
      lib1 = $injector.get('lib1');
  }));

  describe('function1: ',function(){
    it('should return param2 if param2 is defined',function(){
      expect(lib1.function1(1,2)).to.equal(2);
    });

    it('should return param1 if param2 is not defined',function(){
      expect(lib1.function1(1)).to.equal(1);
    });
  });

  describe('coverageFail',function(){
    it('should return bar',function(){
      expect(lib1.coverageFail('foo')).to.equal('bar');
    });

    xit(' will fail if the input is not foo',function(){
      lib1.coverageFail('not foo')
    });
  });

  describe('coverageFail2',function(){
    it('should be possitive if input is above 0',function(){
      expect(lib1.coverageFail2(1)).to.be.above(0);
    })

    it('should be possitive if input is above 3',function(){
      expect(lib1.coverageFail2(-1)).to.be.above(0);
    })

    xit('will return NaN if the input is 0',function(){
      expect(lib1.coverageFail2(0)).to.be.above(0);
    });
  });
});
