import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/App.jsx'
import Home from './components/Home.jsx'
import Body from './components/Body.jsx'

module.exports = (
  <Route path="/" component={App}>
  <Route path="/body" component={Body}/>
    <IndexRoute component={Home}/>
  </Route>
)
