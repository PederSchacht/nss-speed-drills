/* exported nearHundred  */

var nearHundred  = (function(){

  'use strict';

  function nearHundred(number){
    if(number >= 90 && number <= 110){
      return true;
    }else{
      return false;
    }
  }

  return nearHundred;
})();

