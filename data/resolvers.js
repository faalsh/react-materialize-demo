// import { Author, Post, View, FortuneCookie } from './connectors';
import {fetchLeagues, fetchSeasons, fetchRounds, fetchMatches} from './connectors'

const resolveFunctions = {
  RootQuery: {
    leagues() {

      return fetchLeagues();
      
    },
    seasons(_, {leagueId}) {
      return fetchSeasons(leagueId)
    }, 
    rounds(_, {leagueId, seasonId}) {
      return fetchRounds(leagueId, seasonId)
    },
    matches(_,{leagueId, seasonId, roundId}) {
      return fetchMatches(leagueId, seasonId, roundId)
    }

  },
}

export default resolveFunctions;