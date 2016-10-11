import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import Greetings from './components/Greetings'
import SignupPage from './modules/signup'
import LoginPage from './modules/auth/views/login/LoginPage'
import LogoutPage from './modules/auth/views/logout/LogoutPage'
import NewEventPage from './modules/event'

import { requireAuth } from './modules/auth/utils'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Greetings} />
    <Route path="signup" component={SignupPage} />
    <Route path="login" component={LoginPage} />
    <Route path="logout" component={LogoutPage} />
    <Route path="new-event" component={requireAuth(NewEventPage)} />
  </Route>
)
