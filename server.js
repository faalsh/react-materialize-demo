var express = require('express');
var fallback = require('express-history-api-fallback');
var favicon = require('serve-favicon');
var firebase = require('firebase')
var connector = require('./connector')

// var config = {
// 	apiKey: "AIzaSyDka8fzhavzcKcu7NPBUo3m-Bn0RrlXk9Q",
// 	authDomain: "soccer-ca71d.firebaseapp.com",
// 	databaseURL: "https://soccer-ca71d.firebaseio.com",
// 	storageBucket: "soccer-ca71d.appspot.com",
// 	messagingSenderId: "263223690384"
// };

// firebase.initializeApp(config);


// firebase.auth().signInWithEmailAndPassword("@gmail.com", "").catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   console.log(errorCode, errorMessage);
//   // ...
// });

// connector.fetchLeagues().then(function(leagues){
// 	// console.log(response)
// 	leagues.map(function(league) {

// 	firebase.database().ref('leagues').push(league);

// 	connector.fetchSeasons(league.league_slug).then(function(seasons) {
// 		seasons.map(function(season) {
// 			firebase.database().ref('seasons').push(season);

// 			connector.fetchRounds(league.league_slug, season.season_slug).then(function(rounds) {
// 				rounds.map(function(round){
// 					firebase.database().ref('rounds').push(round);

// 						connector.fetchMatches(league.league_slug, season.season_slug, round.round_slug).then(function(matches) {
// 						matches.map(function(match) {
// 							firebase.database().ref('matches').push(match);
// 						})
// 					})
// 				})

// 			})

		
// 		})
// 	})

// 	})
// });



// firebase.auth().signOut().then(function() {
//   // Sign-out successful.
// }, function(error) {
// 	console.log(error)

// });

var app = express();

app.set('port', (process.env.PORT || 5000));
var root = `${__dirname}`;

app.use(express.static(root));
app.use(fallback('index.html',  {root} ));
app.use(favicon(__dirname + '/static/favicon.ico'));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});