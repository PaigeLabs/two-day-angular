(function(){

  var weatherController = function weatherController($scope, WeatherSvc){
      WeatherSvc.GetCurrentWeather()
        .then(
          function success(result){
            $scope.weather = result.data;
          },
          function error(err){
            console.log(err.message);
          });
    };

  angular.module('weatherApp')
    .controller('WeatherCtrl', weatherController);
}());
