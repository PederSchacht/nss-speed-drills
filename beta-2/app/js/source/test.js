/* global test:false, deepEqual:false, average:false, variance:false, stdDev:false */

'use strict';

test('average', function(){
  var numbers = [2,3,2];

  deepEqual(average(numbers),2.33, 'the average of 2, 3 and 2 should equal 2.33');
});

test('variance', function(){
  var numbers = [2,3,2];

  deepEqual(variance(numbers), 0.67 , 'the variance of 2,3,2 should equal 0.67');
});

test('stdDev', function(){
  var numbers = [2,3,2];

  deepEqual(stdDev(numbers),0.82, 'the standard deviation of 2,3,2 should equal 0.82');
});

