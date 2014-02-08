/* global test:false, deepEqual:false, nearHundred:false */

'use strict';

test('nearHundred', function(){
  var num1 = 89 ;
  var num2 = 90 ;
  var num3 = 99 ;
  var num4 = 109 ;
  var num5 = 110 ;
  var num6 = 111 ;

  deepEqual(nearHundred(num1), false, '89 is not near 100');
  deepEqual(nearHundred(num2), true, '90 is near 100');
  deepEqual(nearHundred(num3), true, '99 is near 100');
  deepEqual(nearHundred(num4), true, '109 is near 100');
  deepEqual(nearHundred(num5), true, '110 is near 100');
  deepEqual(nearHundred(num6), false, '89 is not near 100');
});

