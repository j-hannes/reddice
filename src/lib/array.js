import findIndex from 'lodash/findIndex'

export const removeItem = (condition, list) =>
  // TODO .toJS() necessary?
  list.remove(findIndex(list.toJS(), condition))
