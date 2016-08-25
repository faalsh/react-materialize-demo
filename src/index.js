import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import {Provider} from 'react-redux'
import store from './store'
import Layout from './pages/Layout/Layout.jsx'
import About from './pages/About/About.jsx'
import Repos from './pages/Repos/Repos.jsx'
import Repo from './components/Repo/Repo.jsx'
import Home from './pages/Home/Home.jsx'
import './index.css'
import 'materialize-loader'

render((
	<Provider store={store} >
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}/> 
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
  </Provider>
), document.getElementById('app')) 