import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import {Provider} from 'react-redux'
import store from './store'
import Layout from './pages/Layout/Layout.jsx'
import LayoutUI from './pages/Layout/LayoutUI.jsx'

import Matches from './pages/Matches/Matches.jsx'
import Repos from './pages/Repos/Repos.jsx'
import Repo from './components/Repo/Repo.jsx'


import {fetchSeasons} from './actions/leagueActions';

import Home from './pages/Home/Home.jsx'
import './index.css'
import 'materialize-loader'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();





render((
<Provider store={store} >
  <Router history={browserHistory}> 
    <Route path="/ui" component={LayoutUI} />
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