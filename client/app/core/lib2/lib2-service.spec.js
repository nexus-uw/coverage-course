'use strict';

describe('lib2-service: ', function () {
  beforeEach(module('lib2'));

  beforeEach(module(function ($provide) {
    $provide.service('lib1', function () {
      return {
        notAFunction:function(){
          return 'the function is defined here';
        }
      };
    });
  }));

  var lib2;
  beforeEach(inject(function ($injector) {
      lib2 = $injector.get('lib2');
  }));


  describe('syntaxError',function(){
    it('will work when mocked',function(){
      lib2.syntaxError('value');
    });
  });
});
