'use strict';

angular.module('lib2',['lib1'])
.factory('lib2',function(lib1){
  return {
    syntaxError : function(val){
      return lib1.notAFunction(val);
    }
  }
});
