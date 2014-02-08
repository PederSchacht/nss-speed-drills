/* global test:false, deepEqual:false, firstLastSix:false */

'use strict';

test('firstLastSix', function(){
  var nums1 = [6,2,1];
  var nums2 = [2,6,4];
  var nums3 = [9,8,6];

  deepEqual(firstLastSix(nums1), true, 'the first number is a six');
  deepEqual(firstLastSix(nums2), false, 'the first and last numbers are both not 6');
  deepEqual(firstLastSix(nums3), true, 'the last number is a six');
});

