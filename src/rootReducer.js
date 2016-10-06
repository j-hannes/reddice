import { combineReducers } from 'redux'
import flashMessages from './reducers/flashMessages'
import auth from './reducers/auth'

import form from './containers/Form/reducer'

import signup from './modules/signup/reducer'


export default combineReducers({
  flashMessages,
  auth,
  form,
  signup,
})
