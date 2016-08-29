import React from 'react';
import NavLink from '../../components/NavLink/NavLink.jsx'
import './DropDown.css'

class DropDown extends React.Component {

	componentDidMount() {
        $('.dropdown-button').dropdown({
              inDuration: 300,
              outDuration: 225,
              constrain_width: true, // Does not change width of dropdown to that of the activator
              hover: true, // Activate on hover
              gutter: 0, // Spacing from edge
              belowOrigin: false, // Displays dropdown below the button
              alignment: 'left' // Displays dropdown with edge aligned to the left of button
                })  
    } 
    
    render() {
        return (
        	 <span>

				<a className='dropdown-button btn orange lighten-1' href='#' data-activates={this.props.id} data-constrainwidth="false">{this.props.name}</a>

				<ul id={this.props.id} className='dropdown-content'> 


				{
				this.props.items.map((item)=>
					<div>
						<li ><NavLink to={item.to} className="orange-text"> {item.name}</NavLink></li>
						<li className="divider"></li>
					</div>
				)}
				</ul>       
            </span>
        )
    }
}

export default DropDown;

