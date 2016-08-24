import React from 'react'
import NavLink from '../NavLink/NavLink.jsx'
import './Repos.css'

export default class extends React.Component {
  render() {
    return (

      <div className="row">

        <div className="collection col s12 m4 l4">
          <NavLink className="collection-item" to="/repos/reactjs/react-router">React Router</NavLink>
          <NavLink className="collection-item" to="/repos/facebook/react">React</NavLink>
        </div>

        {this.props.children}

      </div>

    )
  }
}
