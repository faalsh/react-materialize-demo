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

        return this.props.league.leagues.map((league) => {
            return {name:league.name, to:{pathname: '/matches', query: {league: league.league_slug} }}
        })



    } 

    getSeasons() {

        const {league} = this.props.location.query

        return this.props.season.seasons.map((season) => {
            return {name:season.name, to:{pathname: '/matches', query: {league: league,season: season.season_slug} }}
        })

    } 

    getRounds() {

        const {league, season} = this.props.location.query

        return this.props.round.rounds.map((round) => {
            return {name:round.name, to:{pathname: '/matches', query:{league: league, season:season, round:round.round_slug}}}
        })

    } 


    renderSeasons(){

        const {league} = this.props.location.query
        const {fetchSeasons, season} = this.props
        if(league && season.league !== league) {
            fetchSeasons(league)
        }


        return league ? <DropDown id="seasons" name="Seasons" items={this.getSeasons()} />: null

        

    }

    renderRounds(){

        const {league, season} = this.props.location.query
        const {fetchRounds, round} = this.props

        if(league && season && (round.league !== league || round.season !== season)) {
            fetchRounds(league, season)
        } 

        return league && season ? <DropDown id="rounds" name="Rounds" items={this.getRounds()} />:null

       
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