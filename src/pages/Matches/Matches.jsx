import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchLeagues, fetchSeasons, fetchRounds} from '../../actions/leagueActions'
import Spinner from '../../components/Spinner/Spinner.jsx'
import DropDown from '../../components/DropDown/DropDown.jsx'
import './Matches.css'

class Matches extends React.Component {

    componentWillMount() {
      this.props.fetchLeagues() 
    }

    renderFetching(){

        if(this.props.fetching) {
            
            return <Spinner />;

        } 

    }

    getLeagues() {

        var items = [];

        this.props.league.leagues.map((league) => {
            items.push({name:league.name, to:{pathname: '/matches', query: {league: league.league_slug} }});
        })

        return items;

    } 

    getSeasons() {

        const league = this.props.location.query.league

        var items = [];

        this.props.season.seasons.map((season) => {
            items.push({name:season.name, to:{pathname: '/matches', query: {league: league,season: season.season_slug} }});
        })

        return items;

    } 

    getRounds() {

        const league = this.props.location.query.league
        const season = this.props.location.query.season

        var items = [];

        this.props.round.rounds.map((round) => {
            items.push({name:round.name, to:{pathname: '/matches', query:{league: league, season:season, round:round.round_slug}}});
        })
        return items;

    } 


    renderSeasons(){

        const league = this.props.location.query.league
        if(league && this.props.season.league !== league) {
            this.props.fetchSeasons(league)
        } 

        if(league) {
            return (
                <DropDown id="seasons" name="Seasons" items={this.getSeasons()} />

            )
        }

    }

    renderRounds(){

        const league = this.props.location.query.league
        const season = this.props.location.query.season


        if(league && season && (this.props.round.league !== league || this.props.round.season !== season)) {
            this.props.fetchRounds(league, season)
        } 

        if(league && season) {
            return (
                <DropDown id="rounds" name="Rounds" items={this.getRounds()} />

            )
        }

    }


	render() {

    return (

    		<div className="row">
                {
                     this.renderFetching()
                 }

                <div className="col s12 filters">
                    <DropDown id="leagues" name="Leagues" items={this.getLeagues()} />
                    {
                        this.renderSeasons()
                    }
                    {
                        this.renderRounds()
                    }

                </div>

    		</div>

    	)
  }

}


function mapStateToProps(state){
	return {
        fetching: state.league.fetching || state.season.fetching,
        league: state.league,
        season: state.season,
        round: state.round,
	}
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({
            fetchLeagues: fetchLeagues,
            fetchSeasons: fetchSeasons,
            fetchRounds: fetchRounds,
		}, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(Matches);