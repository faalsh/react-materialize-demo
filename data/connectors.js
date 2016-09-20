import axios from "axios";


function fetchWithAuth(url){
  return axios.get(url, {headers:{'X-Mashape-Key': 'I2TlMv3VIZmshP2FVfjpAxTAT0Rsp12q4fyjsnQhPbcSmDag1W'}})
}

export function fetchLeagues(){
  return fetchWithAuth("https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues")
            .then(function(response){
                return response.data.data.leagues.map(function(league){
                    return {id: league.league_slug, name: league.name}
                });
            });
}

export function fetchSeasons(league){ 
 return fetchWithAuth("https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/"+league+"/seasons")
           .then(function(response){ 
                  return response.data.data.seasons.map(function(season){
                      return {id: season.season_slug, name: season.name}
                  });
              });
}


export function fetchRounds(league, season){
  return fetchWithAuth("https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/"+league+"/seasons/"+season+"/rounds")
          .then(function(response){ 
                  return response.data.data.rounds.map(function(round){
                      return {id: round.round_slug, name: round.name}
                  });
              });
}

export function fetchMatches(league, season, round){

  return fetchWithAuth("https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/"+league+"/seasons/"+season+"/rounds/"+round+"/matches")
          .then(function(response){ 
                  return response.data.data.matches.map(function(match){
                      return {
                        id: match.identifier,
                        homeTeam:match.home.team,
                        awayTeam:match.away.team,
                        homeGoals:match.home.goals,
                        awayGoals: match.away.goals
                      }
                  });
              });
}



// id: String!
//   homeTeam: String!
//   awayTeam: String!
//   homeGoals: Int
//   awayGoals: Int