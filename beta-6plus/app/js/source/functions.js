/* exported rotateLeft, sumMultiples3or5Below1000, sumFirst10FibNumbers, replaceZeroMaxOddRight, sortEvenOdd, tripleUp */

var rotateLeft  = (function(){

  'use strict';

  function rotateLeft(array){
    var first = array.splice(0,1);
    array.push(first[0]);
    return array;
  }

  return rotateLeft;
})();

var sumMultiples3or5Below1000 = (function(){

  'use strict';

  function sumMultiples3or5Below1000(){
    var sum = 0;
    for(var i = 0; i < 1000; i++){
      if(i%3 === 0 || i%5 === 0){
        sum += i;
      }
    }
    return sum;
  }

  return sumMultiples3or5Below1000;
})();

var sumFirst10FibNumbers = (function(){

  'use strict';

  function sumFirst10FibNumbers(){
    var sum = 0;
    var fibOld = 1;
    var fibNew = 0;
    var temp = 0;
    sum += fibOld;
    for(var i = 0; i < 10; i++){
      sum += fibOld;
      temp = fibNew + fibOld;
      fibNew = fibOld;
      fibOld = temp;
    }
    return sum;
  }

  return sumFirst10FibNumbers;
})();

//missed tests

var replaceZeroMaxOddRight = (function(){

  'use strict';

  function replaceZeroMaxOddRight(array){
    var newArray = array;
    /*
    var tempArray = [];
    var odds = [];
      for(var i = 0; i < array.length; i++){
        if(array[i] === 0){
          for(var x = i+1; x < array.length; x++){
            if(array[x] === 0){
              return x;
            }
            else{
             tempArray.push(array[x]);
            }
            for(var z = i; z<x; z++){
              if(z%2 != 0){
                odds.push(array[z]);
              }
            }
            //find Max Odd in odd array then change value of array[i] to max odd
            //then change i value to x value and clear x value
          }
        }
      }
      */
    return newArray;
  }

  return replaceZeroMaxOddRight;
})();

var sortEvenOdd = (function(){

  'use strict';

  function sortEvenOdd(){
  }

  return sortEvenOdd;
})();

var tripleUp = (function(){

  'use strict';

  function tripleUp(array){
    var tOrF;
    for(var i=0; i < array.length; i++){
      if(array[i+1] === array[i]+1 && array[i+2] === array[i]+2){
        tOrF = true;
        i = array.length;
      }else{
        tOrF = false;
      }
    }
    return tOrF;
  }

  return tripleUp;
})();

