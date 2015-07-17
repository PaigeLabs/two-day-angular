function isItPrime(num){
  var deferred = Q.defer(),
      isPrime = true;

  for(var i = 2; i< num; i++){
    if(num % i === 0){
      isPrime = false;
    }
  }

  if(isPrime){
    deferred.resolve(num);
  }else{
    deferred.reject('not prime');
  }

  return deferred.promise;
}


isItPrime(15).then(
  function(result){
    console.log(result + ' is prime');
  },
  function(err){
    console.log(err);
  }
);
