import { fromJS } from 'immutable'
import isEmpty from 'lodash/isEmpty'
import { SET_CURRENT_USER } from './constants'

const initialState = fromJS({
  isAuthenticated: false,
  user: {},
})

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return state
        .set('isAuthenticated', !isEmpty(action.user))
        .set('user', action.user)
    default:
      return state

  }
}
