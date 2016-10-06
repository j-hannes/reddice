import axios from 'axios'

import {
  addSuccessMessage,
} from '../../actions/flashMessages'

export const checkUserExists = identifier => () =>
  axios.get(`/api/users/${identifier}`)

const signupSuccess = (router, dispatch) => {
  dispatch(addSuccessMessage('You signed up successfully. Welcome!'))
  router.push('/')
}

export const signup = router => () => (values, handleServerError) => dispatch =>
  axios.post('/api/users', values)
    .then(signupSuccess(router, dispatch))
    .catch(handleServerError)
