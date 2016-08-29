import React from 'react';
import {connect} from 'react-redux'
import DropDown from '../../components/DropDown/DropDown.jsx'
import {bindActionCreators} from 'redux'
import {fetchRounds} from '../../actions/leagueActions'




class Rounds extends React.Component {

	componentWillMount() {
		console.log("rounds will mount", this.props)
	  this.props.fetchRounds(this.props.params.league, this.props.params.season)    
	}


	componentWillReceiveProps(nextProps) {
        // console.log("seasons componentWillReceiveProps")
        // console.log(nextProps) 
        // console.log(this.props.params.league) 

        // if(this.props.params.league !== nextProps.params.league) {
        // 	this.props.fetchSeasons(nextProps.params.league)
        // }
    }
    

    getRounds() {


	    var items = [];

	    this.props.round.rounds.map((round) => {
	        items.push({name:round.name, to:this.props.params.season+"/"+round.round_slug});
	    })

	    return items;

	} 
    
    render() {

    	console.log("rounds props", this.props)


        return (
        		
        		<DropDown id="rounds" name="Rounds" items={this.getRounds()} />
        )
    }
}

export default Rounds;


function mapStateToProps(state){
	return {
        round: state.round,
	}
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({
		 fetchRounds: fetchRounds,

		}, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(Rounds); 