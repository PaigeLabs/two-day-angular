(function(){
  console.log('this happens immediately');
}());

(function(stuff){
  console.log('I can even pass ' + stuff + ' to it.')
}('anything'));

(function(){
  'use strict';
  console.log('this happens immediately');
}());
