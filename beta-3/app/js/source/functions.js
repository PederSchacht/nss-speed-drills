/* exported intrest */

var intrest  = (function(){

  'use strict';

  function intrest(P,R,T){
    var p = P;
    var r = R/100;
    var t = T/365;

    return (p*r*t).toFixed(2)*1;
  }

  return intrest;
})();

