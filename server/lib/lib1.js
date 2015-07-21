var lib1 = module.exports;

lib1.function1 = function(param1,param2){
  if(!!param2){
    return param2;
  }else{
    return param1;
  }
};
