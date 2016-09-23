import React from 'react'
import DropDown from '../../components/DropDown/DropDown.jsx'
import firebase from 'firebase'

class LeaguesDropDown extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			leagues: []
		}
	}

	componentDidMount() {
	 	const config = {
		    apiKey: "AIzaSyDka8fzhavzcKcu7NPBUo3m-Bn0RrlXk9Q",
		    authDomain: "soccer-ca71d.firebaseapp.com",
		    databaseURL: "https://soccer-ca71d.firebaseio.com",
		    storageBucket: "soccer-ca71d.appspot.com",
		    messagingSenderId: "263223690384"
		};

		firebase.initializeApp(config);

		var leaguesRef = firebase.database().ref('/leagues/');
		// console.log(leaguesRef)
		// const database = firebase.database();
		// const leaguesRef = database.ref('/leagues/');
		leaguesRef.on('value', (snapshot) => {
			// console.log(snapshot.hasChildren());
			var leagues = [];
			snapshot.forEach((league) => {
				// console.log(league.key,league.val())
				leagues.push({name: league.val().name, to:{pathname: '/matches', query: {league: league.val().identifier}}})
			})
			this.setState({
				leagues: leagues
			});
		})
     
	}

    render() {
        const {selectedName} = this.props


        // const items = this.props.leagues.leagues.map((league) => {
        //      return {name:league.name, to:{pathname: '/matches', query: {league: league.league_slug} }}
        //  })

        const items = this.state.leagues

        return <DropDown id="leagues" name="Leagues" items={items} selectedName={selectedName}/>;
    }
}

export default LeaguesDropDown