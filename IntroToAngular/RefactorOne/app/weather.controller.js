angular.module('testApp')
  .controller('TestCtrl', function($scope, WeatherSvc){
    WeatherSvc.GetCurrentWeather()
      .then(
        function success(result){
          $scope.weather = result.data;
        },
        function error(err){
          console.log(err.message);
        });
  });
