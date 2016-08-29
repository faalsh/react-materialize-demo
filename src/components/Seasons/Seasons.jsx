import React from 'react';
import {connect} from 'react-redux'
import DropDown from '../../components/DropDown/DropDown.jsx'
import {bindActionCreators} from 'redux'
import {fetchSeasons} from '../../actions/leagueActions'




class Seasons extends React.Component {

	componentWillMount() {
		console.log("season componentWillMount")
	  this.props.fetchSeasons(this.props.params.league)    
	}


	componentWillReceiveProps(nextProps) {
        console.log("seasons componentWillReceiveProps")
        console.log(nextProps) 
        console.log(this.props.params.league) 

        if(this.props.params.league !== nextProps.params.league) {
        	this.props.fetchSeasons(nextProps.params.league)
        }
    }
    

    getSeasons() {

	    var items = [];

	    this.props.season.seasons.map((season) => {
	        items.push({name:season.name, to:this.props.params.league+"/"+season.season_slug});
	    })

	    return items;

	} 
    
    render() {

    	console.log("season rendering",this.props)


        return (
        		
        		<span>
        			<DropDown id="seasons" name="Seasons" items={this.getSeasons()} />
        			{this.props.children}
        		</span>

        )
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