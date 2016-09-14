import React from 'react';
import NavLink from '../../components/NavLink/NavLink.jsx'
import './DropDown.css'
import classNames from 'classnames'

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

      const {selectedName} = this.props


      var className = classNames({
        'dropdown-button': true,
        'btn': true,
        'lighten-1': true,
        'orange': this.props.items.length > 0,
        'grey': this.props.items.length == 0
      })
        return (
        	 <span>

				<a className={className} href='#' data-activates={this.props.id} data-constrainwidth="false">{selectedName? selectedName:this.props.name}</a>

				<ul id={this.props.id} className='dropdown-content'> 


				{
				this.props.items.map((item)=>
					<div key={item.name}>
						<li ><NavLink onClick={this.props.onClick} to={item.to} className="orange-text"> {item.name}</NavLink></li>
						<li className="divider"></li>
					</div>
				)}
				</ul>       
            </span>
        )
    }
}

export default DropDown;

