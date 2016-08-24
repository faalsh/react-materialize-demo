import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Layout from './components/Layout/Layout.jsx'
import About from './components/About/About.jsx'
import Repos from './components/Repos/Repos.jsx'
import Repo from './components/Repo/Repo.jsx'
import Home from './components/Home/Home.jsx'
import './index.css'
import 'materialize-loader'

render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}/> 
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))