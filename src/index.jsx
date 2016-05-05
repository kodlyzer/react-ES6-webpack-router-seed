import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory, browserHistory } from 'react-router'
import routes from './routes.jsx'
// import './assets/styles/style.scss'

render(
  	<Router routes={routes} history={browserHistory}/>,
  	document.getElementById('root')
)
