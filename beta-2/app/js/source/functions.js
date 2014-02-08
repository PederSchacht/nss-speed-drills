/* exported average, variance, stdDev */

var average  = (function(){

  'use strict';

  function average(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
      sum += array[i];
    }
    sum = parseFloat(sum/array.length).toFixed(2)*1;
    return sum;
  }

  return average;
})();

var variance = (function(){

  'use strict';

  function variance(array){
    var avg = average(array);
    var vance = 0;
    for(var i = 0; i < array.length; i++){
      vance += (array[i]-avg)*(array[i]-avg);
    }
    vance = parseFloat(vance).toFixed(2)*1;
    return vance;
  }

  return variance;
})();
 
var stdDev = (function(){

  'use strict';

  function stdDev(array){
    return Math.sqrt(variance(array)).toFixed(2)*1;
  }

  return stdDev;
})();
 
