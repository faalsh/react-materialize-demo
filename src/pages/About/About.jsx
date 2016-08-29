import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchLeagues} from '../../actions/leagueActions'
import Spinner from '../../components/Spinner/Spinner.jsx'
import DropDown from '../../components/DropDown/DropDown.jsx'
import './About.css'

class About extends React.Component {



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
            items.push({name:league.name, to:"/about/"+league.league_slug});
        })

        return items;

    } 

    componentWillReceiveProps(nextProps) {
        console.log("about componentWillReceiveProps")
        console.log(nextProps)  
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

                        this.props.children
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
	}
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({
            fetchLeagues: fetchLeagues,
		}, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(About);



