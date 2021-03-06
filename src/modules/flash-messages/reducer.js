import { fromJS } from 'immutable'
import shortid from 'shortid'
import { removeItem } from '../../lib/array'
import {
  ADD_FLASH_MESSAGE,
  DELETE_FLASH_MESSAGE,
} from './constants'

const initialState = fromJS([])

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      return state.push(fromJS({
        id: shortid.generate(),
        type: action.message.type,
        text: action.message.text,
      }))

    case DELETE_FLASH_MESSAGE:
      return removeItem({ id: action.id }, state)

    default:
      return state

  }
}
