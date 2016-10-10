import { combineReducers } from 'redux'
import flashMessages from './reducers/flashMessages'
import auth from './modules/auth/reducer'

export default combineReducers({
  flashMessages,
  auth,
})
