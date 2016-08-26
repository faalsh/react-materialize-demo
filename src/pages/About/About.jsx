import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {changeUserName, toggle, changeUserAge, fetchUser, fetchLeagues} from '../../actions/userActions'
import Spinner from '../../components/Spinner/Spinner.jsx'
import NavLink from '../../components/NavLink/NavLink.jsx'

class About extends React.Component {

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


	render() {

    return (
    		<div>
    		    <input type="input" onChange={(e) => this.props.setName(e.target.value)} defaultValue={this.props.name}/>
    			<input type="button" onClick={() => this.props.toggle()} value="toggle"/>
    			<input type="button" onClick={() => this.props.random(Math.random())} value="random"/>
                <input type="button" onClick={() => this.props.fetchUser()} value="Fetch Users"/>
                <input type="button" onClick={() => this.props.fetchLeagues()} value="Fetch Leagues"/>
    			<div>
    				<ul>
    					<li>{this.props.name}</li>
    					<li>{this.props.age}</li> 
    					<li>{this.props.toggled? 'true':'false'}</li>
    				</ul>
    			</div>
                {
                    this.renderFetching()
                }
                <div>
                {this.props.leagues.map((league)=>

                         <div><NavLink to={league.league_slug}>{league.nation}: {league.name}</NavLink></div>
                    )}
            </div>

    		</div>

    	)
  }

}


function mapStateToProps(state){
	return {
		name: state.user.name,
		age: state.user.age,
		toggled: state.user.toggled,
        fetching: state.user.fetching,
        fetched: state.user.fetched,
        error: state.user.error,
        leagues: state.user.leagues,

	}
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({
			setName: changeUserName,
			toggle: toggle,
			random: changeUserAge,
            fetchUser: fetchUser,
            fetchLeagues: fetchLeagues
		}, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(About);



