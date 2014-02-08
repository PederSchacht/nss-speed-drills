/* global test:false, deepEqual:false, rotateLeft:false, sumMultiples3or5Below1000:false, sumFirst10FibNumbers:false, replaceZeroMaxOddRight:false, sortEvenOdd:false, tripleUp:false */

'use strict';

test('rotateLeft', function(){
  var nums1 = [3,5,7];

  deepEqual(rotateLeft(nums1), [5,7,3], 'the numbers rotated left(first number to end)');
});

test('sumMultiples3or5Below1000', function(){

  deepEqual(sumMultiples3or5Below1000(), 233168, 'the sum of the multiples of 3 or 5 below 1000 is 233,168');
});

test('sumFirst10FibNumbers', function(){

  deepEqual(sumFirst10FibNumbers(), 144, 'the sum of the first 10 fib numbers is equal to 144');
});

//missed tests

test('replaceZeroMaxOddRight', function(){
  var numbers = [0,2,3,0,5,2,0,7,9];

  deepEqual(replaceZeroMaxOddRight(numbers), [3,2,3,5,5,2,9,7,9], 'every zero is replaced with the largest odd number to its right up to the next zero');
});

test('sortEvenOdd', function(){
  var numbers = [7,2,6,5,4,9];

  deepEqual(sortEvenOdd(numbers), [2,4,6,5,7,9], 'the evens and odds should be separated and sorted smallest to largest');
});

test('tripleUp', function(){
  var nums1 = [4,2,5,6,7,10];
  var nums2 = [1,2,4,9,6,8,9];
  var nums3 = [3,9,10,11,12,15];

  deepEqual(tripleUp(nums1), true, 'the array contains a series of 3 consecutive numbers');
  deepEqual(tripleUp(nums2), false, 'the array does not contains a series of 3 consecutive numbers');
  deepEqual(tripleUp(nums3), true, 'the array contains a series of 3 consecutive numbers');
});

