var CarService = function(){
	var svc = this;
	svc.pickUp = function(){
			console.log('Picking you up.');
	};
	svc.dropOff = function(){
			console.log('Dropping you off.');
	};
	return svc;
};

var myCarService = new CarService();
myCarService.pickUp();
myCarService.dropOff();
