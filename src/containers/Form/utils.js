import Validator from 'validator'

export const validateInput = (fields, values) =>
  fields.reduce((acc, field) => {
    if (
      field.required &&
      Validator.isNull(values[field.name])
    ) {
      return {
        ...acc,
        [field.name]: 'This field is required',
      }
    }
    if (
      field.validateEmail &&
      !Validator.isEmail(values[field.name])
    ) {
      return {
        ...acc,
        [field.name]: 'Email is invalid',
      }
    }
    if (
      field.validateEqualTo &&
      !Validator.equals(values[field.name], values[field.validateEqualTo])
    ) {
      return {
        ...acc,
        [field.name]: `Does not match with ${field.validateEqualTo}`,
      }
    }
    return acc
  }, {})
