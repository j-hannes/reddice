import { combineReducers } from 'redux'
import flashMessages from './reducers/flashMessages'
import auth from './reducers/auth'

import form from './containers/Form/reducer'


export default combineReducers({
  flashMessages,
  auth,
  form,
})
