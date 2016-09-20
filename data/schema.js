const typeDefinitions = `

type Match {
  id: String!
  homeTeam: String!
  awayTeam: String!
  homeGoals: Int
  awayGoals: Int
}

type Round {
  id: String!
  name: String!
}

type Season {
  id: String!
  name: String!
}

type League {
  id: String!
  name: String!
}

# the schema allows the following two queries:
type RootQuery {
  leagues: [League]
  seasons(leagueId: String): [Season]
  rounds(leagueId: String, seasonId: String): [Round]
  matches(leagueId: String, seasonId: String, roundId:String): [Match]
}

# we need to tell the server which types represent the root query
# and root mutation types. We call them RootQuery and RootMutation by convention.
schema {
  query: RootQuery
}
`;

export default [typeDefinitions];