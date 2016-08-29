import React from 'react';
import {connect} from 'react-redux'
import DropDown from '../../components/DropDown/DropDown.jsx'
import {bindActionCreators} from 'redux'
import {fetchSeasons} from '../../actions/leagueActions'




class Seasons extends React.Component {

	// componentDidMount() {
	//     this.props.fetchSeasons(this.props.params.league)  
	// }

	componentWillReceiveProps(nextProps) {
        console.log("seasons componentWillReceiveProps")
        console.log(nextProps)            
    }

    getSeasons() {

	    var items = [];

	    this.props.season.seasons.map((season) => {
	        items.push({name:season.name, to:season.season_slug});
	    })

	    return items;

	} 
    
    render() {

    	// console.log(this.props)

        return <DropDown id="seasons" name="Seasons" parentLocation={this.props.location.pathname} items={this.getSeasons()} />;
    }
}

export default Seasons;


function mapStateToProps(state){
	return {
        season: state.season,
	}
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({
		 fetchSeasons: fetchSeasons,

		}, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(Seasons); 