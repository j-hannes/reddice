import { update, populate } from '../../lib/object'

import {
  INITIALIZE,
  UPDATE_FIELD,
  SET_ERRORS,
  IS_LOADING,
} from './constants'

const initialState = {
  errors: {},
  isLoading: false,
  values: {},
  fields: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE:
      return {
        ...state,
        values: populate(action.fields, 'name', 'initialValue', ''),
        fields: populate(action.fields, 'name', '*'),
      }

    case UPDATE_FIELD:
      return {
        ...state,
        values: update(state.values, action.name, action.value),
      }

    case SET_ERRORS:
      return {
        ...state,
        errors: action.errors,
      }

    case IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      }

    default:
      return state
  }
}
