/* global test:false, deepEqual:false, square:false, sumOfSquares:false */

'use strict';

test('square', function(){
  var number = 5;

  deepEqual(square(number),25, '5 should equal 25');
});

test('sumOfSquares', function(){
  var numbers = [1,2,3];

  deepEqual(sumOfSquares(numbers),14, 'the sum of 1,2,3 squared should equal 14');
});
