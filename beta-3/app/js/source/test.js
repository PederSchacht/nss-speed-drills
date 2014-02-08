/* global test:false, deepEqual:false, intrest:false */

'use strict';

test('interest', function(){
  var P = 890;
  var R = 12.5;
  var T = 261;

  deepEqual(intrest(P,R,T), 79.55, 'the intrest on a loan for $890 at 12.5% for 261 days should equal $79.55');
});

