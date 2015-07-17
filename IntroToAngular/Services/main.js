angular.module('testApp', [])
  .controller('TestCtrl', function($scope, WeatherSvc){
    WeatherSvc.GetCurrentWeather()
      .then(
        function success(result){
          $scope.weather = result.data;
        },
        function error(err){
          console.log(err.message);
        });
  })
  .factory('WeatherSvc', function($http){
    var getCurrentWeather = function(){
      return $http.get('http://api.openweathermap.org/data/2.5/weather?q=Merriam,KS&units=imperial');
    };

    return {
      GetCurrentWeather: getCurrentWeather
    };
  });
