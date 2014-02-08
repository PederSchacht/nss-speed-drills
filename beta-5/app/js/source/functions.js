/* exported firstLastSix  */

var firstLastSix  = (function(){

  'use strict';

  function firstLastSix(array){
    var last = array[array.length -1];
    var first = array[0];
    if(first === 6 || last === 6){
      return true;
    }else{
      return false;
    }
  }

  return firstLastSix;
})();

