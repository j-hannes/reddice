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

export const isLoading = isLoading => ({
  type: IS_LOADING,
  isLoading,
})

export const onError = ({ response }) => (dispatch) => {
  dispatch(setErrors(response.data.errors))
  dispatch(isLoading(false))
}

export const onBlur = (name, val) => (dispatch, getState) => {
  const { fields, errors } = getState().form
  if (fields[name].onBlur && val !== '') {
    fields[name].onBlur(val).then((res) => {
      errors[name] = res.data.user ? fields[name].onBlurError : ''
      dispatch(setErrors(errors))
    })
  }
}

export const validateForm = ({ fields, submit }) => (dispatch, getState) => {
  const { values } = getState().form
  const errors = validateInput(fields, values)
  dispatch(setErrors(errors))
  if (isEmpty(errors)) {
    dispatch(isLoading(true))
    dispatch(submit(values, onError))
  }
}
