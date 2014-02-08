/* exported square, sumOfSquares */

var square = (function(){

  'use strict';

  function square(x){
    return x * x;
  }

  return square;
})();

var sumOfSquares = (function(){

  'use strict';

  function sumOfSquares(array){
    var sum = 0;
    for(var i=0; i < array.length; i++){
      var squared =  square(array[i]);
      sum += squared;
    }
    return sum;
  }

  return sumOfSquares;
})();
 
