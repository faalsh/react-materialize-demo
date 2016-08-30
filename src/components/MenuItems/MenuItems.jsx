import React from 'react';
import NavLink from '../NavLink/NavLink.jsx'

export default class extends React.Component {
    
    render() {
        return (
        	<div>
        	<li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
            <li><NavLink to="/matches">Matches</NavLink></li>
            <li><NavLink to="/repos">Standings</NavLink></li>
            </div>
	    )
    }
}