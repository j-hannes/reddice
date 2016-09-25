import { PropTypes } from 'react'


export const {
  arrayOf,
  func,
  shape,
  string,
} = PropTypes

export const Message =
  arrayOf(shape({
    id: string,
    type: string,
    text: string,
  }))
