'use strict';

angular.module('lib1',[])
.factory('lib1',function(){
  return {
    function1 : function(arg1,arg2){
      if(!!arg2){
        return arg2;
      }else{
        return arg1;
      }
    },
    coverageFail : function(key){
      var something = {        foo : function(){          return 'bar'        }      }
      return something[key]();
    },
    coverageFail2 : function(input){
      var tmp = 0;

      if(input > 0 ){
        tmp++;
      }

      if(input < 0){
        tmp--;
      }

      return input / tmp;
    }
  };
})
