import findIndex from 'lodash/findIndex'

export const removeItem = (condition, list) => {
  const index = findIndex(list, condition)
  if (index >= 0) {
    return [
      ...list.slice(0, index),
      ...list.slice(index + 1),
    ]
  }
  return list
}
