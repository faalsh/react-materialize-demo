import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from '../../components/MyAwesomeReactComponent/MyAwesomeReactComponent.jsx'

 import React from 'react';
 



 
 class LayoutUI extends React.Component {

     render() {
         return (
     			 <MuiThemeProvider>
				    <MyAwesomeReactComponent />
				  </MuiThemeProvider>
         	)
     }
 }
 
 export default LayoutUI;
