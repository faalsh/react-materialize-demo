import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchLeagues, fetchSeasons, fetchRounds, fetchMatches} from '../../actions/leagueActions'
// import Spinner from '../../components/Spinner/Spinner.jsx'
// import './Matches.css'
import LeaguesDropDown from '../../components/LeaguesDropDown/LeaguesDropDown.jsx'
import SeasonsDropDown from '../../components/SeasonsDropDown/SeasonsDropDown.jsx'
import RoundsDropDown from '../../components/RoundsDropDown/RoundsDropDown.jsx'
import MatchesTable from '../../components/MatchesTable/MatchesTable.jsx'


class Matches extends React.Component {

    componentDidMount() {
      this.props.fetchLeagues() 
    }


	render() {

        const {fetching, fetchSeasons, fetchRounds,fetchMatches, seasons, leagues, rounds, matches} = this.props
        const {query} = this.props.location

    return (

            <div className="container">
            <div className="row valign-wrapper">
                <div className="col s12 filters">
                    <LeaguesDropDown leagues={leagues} selectedName={query.league} /> 
                    <SeasonsDropDown fetchSeasons={fetchSeasons}  seasons={seasons} query={query} />
                    <RoundsDropDown fetchRounds={fetchRounds} rounds={rounds} query={query} />
                    
                </div>
            </div>

            <div className="row">
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