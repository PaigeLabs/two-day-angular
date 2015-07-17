function somethingHappens(param1, callback){
  console.log(param1);
  callback();
}

function simpleCallback(){
  console.log('I am being called back.');
}

somethingHappens('singing in the rain', simpleCallback);
