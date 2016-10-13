import combineReducers from 'redux-immutable-combine-reducers'
import flashMessages from './modules/flash-messages/reducer'
import auth from './modules/auth/reducer'

export default combineReducers({
  flashMessages,
  auth,
})
