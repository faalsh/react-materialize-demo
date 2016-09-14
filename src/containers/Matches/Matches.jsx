import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchLeagues, fetchSeasons, fetchRounds, fetchMatches} from '../../actions/leagueActions'
import Spinner from '../../components/Spinner/Spinner.jsx'
import DropDown from '../../components/DropDown/DropDown.jsx'
import './Matches.css'
import matchesJSON from  '../../data/matches.json'


class LeaguesDropDown extends React.Component {

    

    render() {
        const {selectedName} = this.props


        const items = this.props.leagues.leagues.map((league) => {
             return {name:league.name, to:{pathname: '/matches', query: {league: league.league_slug} }}
         })

        return <DropDown id="leagues" name="Leagues" items={items} selectedName={selectedName}/>;
    }
}


class SeasonsDropDown extends React.Component {

    componentWillReceiveProps(nextProps) {    
        const {fetchSeasons,query, seasons} = nextProps

        if(query.league && seasons.league !== query.league) {
            fetchSeasons(query.league)
        }
    }

    shouldComponentUpdate(nextProps, nextState) {

        return nextProps.seasons.fetched 
       
    }

    render() {
        const { seasons, query} = this.props
        const items = seasons.seasons.map((season) => {
             return {name:season.name, to:{pathname: '/matches', query: {league: query.league,season: season.season_slug} }}
         })

        return query.league ? <DropDown id="seasons" name="Seasons" items={items} selectedName={query.season}/>: null;
    }
}


class RoundsDropDown extends React.Component {

    componentWillReceiveProps(nextProps) {

        const {query, rounds, fetchRounds} = nextProps
        
        if(query.league && query.season && (rounds.league !== query.league || rounds.season !== query.season) ) {
            fetchRounds(query.league, query.season)
        }   
    }
    shouldComponentUpdate(nextProps, nextState) {
        
        return nextProps.rounds.fetched

    }

    render() {


        const {rounds, query} = this.props
        const items = rounds.rounds.map((round) => {
            return {name:round.name, to:{pathname: '/matches', query:{league: query.league, season:query.season, round:round.round_slug}}}
        })

        return query.league && query.season ? <DropDown id="rounds" name="Rounds" items={items} selectedName={query.round} />:null
    }
}



class MatchesTable extends React.Component {

    componentWillReceiveProps(nextProps) {

        const {query, matches, fetchMatches} = nextProps
        
        if(query.league && query.season && query.round && (matches.league !== query.league || matches.season !== query.season || matches.round !== query.round)) {
            fetchMatches(query.league, query.season, query.round)
        }   
    }

    shouldComponentUpdate(nextProps, nextState) {
        
        return nextProps.matches.fetched
    }

    render() {
        const {matches, query} = this.props
        const rows = matches.matches.map((match) => {


            return (
                <div key={match.identifier} style={{padding:"10px", textAlign: "center", display:"table-row", margin:"5px", height:"30px"}} className="card grey lighten-3
">
                    <div style={{paddingRight: 5, fontWeight: "bold", display:"table-cell", textAlign: "right", verticalAlign: "middle", paddingRight: "15px"}}>{match.home.team}</div> 
                    <div className="blue white-text" style={{display:"table-cell"}}>{match.home.goals >= 0 ? match.home.goals:'-'}</div> 
                    <div className="blue white-text" style={{display:"table-cell"}}>:</div> 
                    <div className="blue white-text"  style={{display:"table-cell"}}>{match.away.goals >=0 ? match.away.goals:'-'}</div> 
                    <div style={{paddingLeft: 5, fontWeight: "bold", display:"table-cell", textAlign:"left", verticalAlign: "middle", paddingLeft: "15px"}}>{match.away.team}</div>
                </div>
            )
        })

        return query.league && query.season && query.round ? <div style={{marginTop:"50px", display:"table", width: "100%"}}>{rows}</div>:null
    }
}





class Matches extends React.Component {

    componentDidMount() {
      this.props.fetchLeagues() 
    }


	render() {

        const {fetching, fetchSeasons, fetchRounds,fetchMatches, seasons, leagues, rounds, matches} = this.props
        const {query} = this.props.location

    return (

            <div className="row">
                { fetching ? <Spinner />:null }
                <div className="col s12 filters">
                    <LeaguesDropDown leagues={leagues} selectedName={query.league} /> 
                    <SeasonsDropDown fetchSeasons={fetchSeasons}  seasons={seasons} query={query} />
                    <RoundsDropDown fetchRounds={fetchRounds} rounds={rounds} query={query} />
                    <MatchesTable fetchMatches={fetchMatches} matches={matches} query={query}/>
                </div>
            </div>

    	)
  }

}


function mapStateToProps(state){
	return {
        fetching: state.league.fetching || state.season.fetching || state.round.fetching,
        leagues: state.league,
        seasons: state.season,
        rounds: state.round,
        matches: state.match
	}
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({
            fetchLeagues: fetchLeagues,
            fetchSeasons: fetchSeasons,
            fetchRounds: fetchRounds,
            fetchMatches: fetchMatches
		}, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(Matches);