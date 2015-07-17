var Killer = function(weapon){
		var stabEm = function(){
					console.log('Stab. Stab. Stab.');
				},
				shootEm = function(){
					console.log('Pew. Pew. Pew.');
				},
				killEm = function(){
					if(weapon==='knife'){
						return stabEm();
					}
					if(weapon==='gun'){
						return shootEm();
					}
					console.log('Sorry, I can\'t kill ya today. Come back tomorrow.');
				};

		return {
			KillEm: killEm
		};
	};

	var Psycho = new Killer('knife');
	Psycho.KillEm();

	var Sniper = new Killer('gun');
	Sniper.KillEm();

	var NormalPerson = new Killer();
	NormalPerson.KillEm();
