export const update = (obj, key, value) => ({
  ...obj,
  [key]: value,
})

export const populate = (sourceMap, keyField, valueField, defaultValue) =>
  sourceMap.reduce(
    (populated, sourceItem) =>
      update(
        populated,
        sourceItem[keyField],
        sourceItem[valueField] || defaultValue
      ),
    {}
  )
