angular.module('testApp', [])
  .controller('TestCtrl', function($scope, $http){
    $http.get('http://api.openweathermap.org/data/2.5/weather?q=Merriam,KS&units=imperial')
      .then(
        function success(result){
          $scope.weather = result.data;
        },
        function error(err){
          console.log(err.message);
        });
  });
