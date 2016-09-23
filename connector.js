var axios = require("axios");

var exports = module.exports = {};

var fetchWithAuth = function(url){
  return axios.get(url, {headers:{'X-Mashape-Key': 'I2TlMv3VIZmshP2FVfjpAxTAT0Rsp12q4fyjsnQhPbcSmDag1W'}})
}

exports.fetchLeagues = function(){
  return fetchWithAuth("https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues")
            .then(function(response){
                return response.data.data.leagues
            });
}

exports.fetchSeasons = function(league){ 
 return fetchWithAuth("https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/"+league+"/seasons")
           .then(function(response){ 
                  return response.data.data.seasons
              });
}


exports.fetchRounds = function(league, season){
  console.log(league,season)
  return fetchWithAuth("https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/"+league+"/seasons/"+season+"/rounds")
          .then(function(response){ 
                  return response.data.data.rounds
              });
}

exports.fetchMatches = function(league, season, round){

  return fetchWithAuth("https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/"+league+"/seasons/"+season+"/rounds/"+round+"/matches")
          .then(function(response){ 
                  return response.data.data.matches
              });
}



// id: String!
//   homeTeam: String!
//   awayTeam: String!
//   homeGoals: Int
//   awayGoals: Int