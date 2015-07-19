(function(){

  var weatherService = function weatherService($http){
    var getCurrentWeather = function getCurrentWeather(){
      return $http.get('http://api.openweathermap.org/data/2.5/weather?q=Merriam,KS&units=imperial');
    };

    return {
      GetCurrentWeather: getCurrentWeather
    };
  };


  angular.module('weatherApp')
    .factory('WeatherSvc', weatherService);

}())
