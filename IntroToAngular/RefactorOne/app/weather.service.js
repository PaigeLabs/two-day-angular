angular.module('testApp')
  .factory('WeatherSvc', function($http){
    var getCurrentWeather = function(){
      return $http.get('http://api.openweathermap.org/data/2.5/weather?q=Merriam,KS&units=imperial');
    };

    return {
      GetCurrentWeather: getCurrentWeather
    };
  });
