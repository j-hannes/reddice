import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import Greetings from './components/Greetings'
import SignupPage from './modules/signup'
import LoginPage from './components/login/LoginPage'
import LogoutPage from './components/logout/LogoutPage'
import NewEventPage from './components/events/NewEventPage'

import requireAuth from './utils/requireAuth'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Greetings} />
    <Route path="signup" component={SignupPage} />
    <Route path="login" component={LoginPage} />
    <Route path="logout" component={LogoutPage} />
    <Route path="new-event" component={requireAuth(NewEventPage)} />
  </Route>
)
