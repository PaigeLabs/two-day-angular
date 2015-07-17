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

//calling...
isItPrime(15)
  .then(
    function success(result){
      console.log(result + ' is prime');
    },
    function error(err){
      console.log(err);
    }
  )
  .then(function(){
    throw new Error('something happened');
  })
  .fail(function(err){
    console.log('something happened in the success, error or other stuff in this chain.', err.message);
  })
  .finally(function(){
    console.log('always do this');
  });
