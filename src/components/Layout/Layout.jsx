import React from 'react'
import NavLink from '../NavLink/NavLink.jsx'
import MenuItems from '../MenuItems/MenuItems.jsx'
import 'materialize-css/dist/js/materialize.js';

export default class extends React.Component {

 
  componentDidMount(){

    $(".button-collapse").sideNav();


  }

  render() {
      return (
        <div>
          <nav>
            <div className="nav-wrapper">
              <NavLink to="/" className="right brand-logo">React Demo</NavLink>
              <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
              <ul id="nav-mobile" className="left hide-on-med-and-down">
                <MenuItems />
              </ul>
              <ul className="side-nav" id="mobile-demo">
                <MenuItems />
              </ul>
            </div>
        </nav>


          {this.props.children}
        </div>
      )

  }
}