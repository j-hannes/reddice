import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import Home from './modules/home'
import SignupPage from './modules/signup'
import LoginPage from './modules/auth/login'
import LogoutPage from './modules/auth/logout'
import NewEventPage from './modules/event'

import { requireAuth } from './modules/auth/utils'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="signup" component={SignupPage} />
    <Route path="login" component={LoginPage} />
    <Route path="logout" component={LogoutPage} />
    <Route path="new-event" component={requireAuth(NewEventPage)} />
  </Route>
)
