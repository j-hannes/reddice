import isEmpty from 'lodash/isEmpty'

import { validateInput } from './utils'

import {
  INITIALIZE,
  UPDATE_FIELD,
  SET_ERRORS,
  IS_LOADING,
} from './constants'

export const initialize = fields => ({
  type: INITIALIZE,
  fields,
})

export const updateField = (name, value) => ({
  type: UPDATE_FIELD,
  name,
  value,
})

export const setErrors = errors => ({
  type: SET_ERRORS,
  errors,
})

export const onBlur = (name, val) => (dispatch, getState) => {
  const { fields, errors } = getState().form
  if (fields[name].onBlur && val !== '') {
    fields[name].onBlur(val).then((res) => {
      errors[name] = res.data.user ? fields[name].onBlurError : ''
      dispatch(setErrors(errors))
    })
  }
}

export const isLoading = isLoading => ({
  // TODO this does not need to be a separate action?
  // think about request, success, failure
  type: IS_LOADING,
  isLoading,
})

export const onError = ({ response }) => (dispatch) => {
  // TODO can this be "merged" with setErrors below?
  dispatch(setErrors(response.data.errors))
  dispatch(isLoading(false))
}

export const validateForm = ({ fields, submit }) => (dispatch, getState) => {
  const { values } = getState().form
  const errors = validateInput(fields, values)
  dispatch(setErrors(errors))
  if (isEmpty(errors)) {
    dispatch(isLoading(true))
    submit(values, onError)
  }
}
