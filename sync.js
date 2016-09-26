var firebase = require('firebase')
var connector = require('./connector')

var config = {
	apiKey: "AIzaSyDka8fzhavzcKcu7NPBUo3m-Bn0RrlXk9Q",
	authDomain: "soccer-ca71d.firebaseapp.com",
	databaseURL: "https://soccer-ca71d.firebaseio.com",
	storageBucket: "soccer-ca71d.appspot.com",
	messagingSenderId: "263223690384"
};

firebase.initializeApp(config);

var exports = module.exports = {};

exports.startSync = function(updateAll){
	
	var username = process.env.USERNAME;
	var password = process.env.PASSWORD;

	firebase.auth().signInWithEmailAndPassword(username, password)
	.then(function(){
		if(updateAll) {
			cleanUp();
		} else {
			firebase.database().ref('matches').remove();
		}
		syncLeagues(updateAll);

	  })
	.catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  console.log(errorCode, errorMessage);

	});
}

var cleanUp = function(){
	firebase.database().ref('leagues').remove();
	firebase.database().ref('seasons').remove();
	firebase.database().ref('rounds').remove();
	firebase.database().ref('matches').remove();

}

var logout = function(){
		 //  	firebase.auth().signOut().then(function() {
		// 	  console.log("signout is successful");
		// }, function(error) {
		// 	console.log(error);

		// });
}

var syncLeagues = function(updateAll){
	connector.fetchLeagues().then(function(leagues){

		leagues.map(function(league){
			if(updateAll) {
				firebase.database().ref('leagues').push(league);
			}
			
			syncSeasons(league.league_slug, updateAll);
		});
		
	});
}

var syncSeasons = function(league_slug, updateAll){
	connector.fetchSeasons(league_slug).then(function(seasons){
		seasons.map(function(season){
			season.league_slug = league_slug;
			if(updateAll) {
				firebase.database().ref('seasons').push(season);
			}
			syncRounds(league_slug, season.season_slug, updateAll);
		});
	});
}

var syncRounds = function(league_slug, season_slug, updateAll){
	connector.fetchRounds(league_slug, season_slug).then(function(rounds){
		rounds.map(function(round){
			round.league_slug = league_slug;
			round.season_slug = season_slug;
			if(updateAll) {
				firebase.database().ref('rounds').push(round);
			}	
			syncMatches(league_slug, season_slug, round.round_slug);
		});
	});
}

var syncMatches = function(league_slug, season_slug, round_slug){
	connector.fetchMatches(league_slug, season_slug, round_slug).then(function(matches){
		matches.map(function(match){
			match.league_slug = league_slug;
			match.season_slug = season_slug;
			match.round_slug = round_slug;
			firebase.database().ref('matches').push(match);
		});
	});
}