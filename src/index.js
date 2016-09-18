import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import {Provider} from 'react-redux'
import store from './store'
import Layout from './containers/Layout/Layout.jsx'

import Matches from './containers/Matches/Matches.jsx'
import Repos from './containers/Repos/Repos.jsx'
import Repo from './components/Repo/Repo.jsx'


import {fetchSeasons} from './actions/leagueActions';

import Home from './containers/Home/Home.jsx'
import './index.css'
// import 'materialize-loader'


render((
<Provider store={store} >
  <Router history={browserHistory}> 
    <Route path="/" component={Layout}>
      
      <IndexRoute component={Home}/> 
     
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
      
      <Route path="/matches" component={Matches}>
      </Route>

    </Route>
  </Router>
</Provider>
), document.getElementById('app'))   