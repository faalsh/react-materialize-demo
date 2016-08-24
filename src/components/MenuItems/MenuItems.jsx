import React from 'react';
import NavLink from '../NavLink/NavLink.jsx'

export default class extends React.Component {
    
    render() {
        return (
        	<div>
        	<li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/repos">Repos</NavLink></li>
            </div>
	    )
    }
}