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
import firebase from 'firebase'


class Matches extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            leagues: [],
            seasons: [],
            rounds: [],
            matches: []
        }
    }

    componentDidMount() {
      // this.props.fetchLeagues()

      const config = {
            apiKey: "AIzaSyDka8fzhavzcKcu7NPBUo3m-Bn0RrlXk9Q",
            authDomain: "soccer-ca71d.firebaseapp.com",
            databaseURL: "https://soccer-ca71d.firebaseio.com",
            storageBucket: "soccer-ca71d.appspot.com",
            messagingSenderId: "263223690384"
        };

        firebase.initializeApp(config);
        this.getLeagues();
        const {league} = this.props.location.query
        if(league) {
            this.getSeasons(league);
        }

        
    }
    componentWillReceiveProps(nextProps) {
        const {league} = nextProps.location.query
        if (league) {
            this.getSeasons(league);
        }     
    }

    getLeagues(){
        var leaguesRef = firebase.database().ref('/leagues/');
        leaguesRef.on('value', (snapshot) => {
            var leagues = [];
            snapshot.forEach((league) => {
                leagues.push({name: league.val().name, to:{pathname: '/matches', query: {league: league.val().league_slug}}})
            });
            this.setState({
                leagues: leagues
            });
        });
    }

    getSeasons(league) {
        var seasonsRef = firebase.database().ref('/seasons/');
        seasonsRef.orderByChild("league_slug").equalTo(league).on('value', (snapshot) => {
            var seasons = [];
            snapshot.forEach((season) => {
                seasons.push({name: season.val().name, to:{pathname: '/matches', query: {league:league, season: season.val().season_slug}}})
            });
            this.setState({
                seasons: seasons
            });
        });
    }


	render() {

        const {leagues, seasons, rounds, matches} = this.state;
        const {league} = this.props.location.query

    return (

            <div className="container">
            <div className="row valign-wrapper">
                <div className="col s12 filters">
                    <LeaguesDropDown leagues={leagues} /> 
                    <SeasonsDropDown seasons={seasons} league={league}/>
                    
                </div>
            </div>

            <div className="row">
            </div>
            </div>

    	)
  }

}

export default Matches;