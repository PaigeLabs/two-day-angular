(function(){
  'use strict';

  var testController = function($scope, WeatherSvc){
    WeatherSvc.GetCurrentWeather()
      .then(
        function success(result){
          $scope.weather = result.data;
        },
        function error(err){
          console.log(err.message);
        });
  };

  var weatherService = function($http){
    var getCurrentWeather = function(){
      return $http.get('http://api.openweathermap.org/data/2.5/weather?q=Merriam,KS&units=imperial');
    };

    return {
      GetCurrentWeather: getCurrentWeather
    };
  };

  angular.module('testApp', [])
    .controller('TestCtrl', testController)
    .factory('WeatherSvc', weatherService);
    
}())
