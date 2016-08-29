import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchLeagues} from '../../actions/leagueActions'
import Spinner from '../../components/Spinner/Spinner.jsx'
import DropDown from '../../components/DropDown/DropDown.jsx'

class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            items: [{to:'test', name:'Test'}]
        };
    }

    renderFetching(){

        if(this.props.fetching) {
            
            return <Spinner />;

            // return (
            //         <div className="progress">
            //           <div className="indeterminate"></div>
            //       </div>
            // )

            // return (
            //     <div className="preloader-wrapper big active">
            //         <div className="spinner-layer spinner-blue">
            //             <div className="circle-clipper left">
            //               <div className="circle" />
            //             </div>
            //             <div className="gap-patch">
            //               <div className="circle" />
            //             </div>
            //             <div className="circle-clipper right">
            //               <div className="circle" />
            //             </div>
            //         </div>
            //     </div>
            // )
        } else if (this.props.fetched){
            return <div>fetched</div>;
        }

    }

    getLeagues() {

        var items = [];

        this.props.league.leagues.map((league) => {
            items.push({name:league.name, to:league.league_slug});
        })

        return items;

    } 

      


	render() {

    return (
    		<div>
                
                <div>
                    <input type="button" onClick={() => this.props.fetchLeagues()} value="Fetch Leagues"/>
                </div>

                <DropDown id="leagues" name="Leagues" parentLocation={this.props.location.pathname} items={this.getLeagues()} />
                {

                    this.props.children
                }

    		</div>

    	)
  }

}


function mapStateToProps(state){
	return {

        league: state.league,
        season: state.season,

	}
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({
            fetchLeagues: fetchLeagues,
		}, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(About);



