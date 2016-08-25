import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {changeUserName, toggle, changeUserAge} from '../../actions/userActions'


class About extends React.Component {


	

	render() {
    return (
    		<div>
    		    <input type="input" onChange={(e) => this.props.setName(e.target.value)} defaultValue={this.props.name}/>
    			<input type="button" onClick={() => this.props.toggle()} value="toggle"/>
    			<input type="button" onClick={() => this.props.random(Math.random())} value="random"/>
    			<div>
    				<ul>
    					<li>{this.props.name}</li>
    					<li>{this.props.age}</li> 
    					<li>{this.props.toggled? 'true':'false'}</li>
    				</ul>
    			</div>
    		</div>
    	)
  }

}


function mapStateToProps(state){
	return {
		name: state.user.name,
		age: state.user.age,
		toggled: state.user.toggled
	}
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({
			setName: changeUserName,
			toggle: toggle,
			random: changeUserAge
		}, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(About);



