import React from 'react'
import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'
import { update, populate } from '../../lib/object'
import TextFieldGroup from '../common/TextFieldGroup'
import SelectFieldGroup from '../common/SelectFieldGroup'

class Form extends React.Component {

  constructor(props) {
    super(props)
    this.bindMethods()
    this.setInitialState(props)
  }

  bindMethods() {
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.handleServerError = this.handleServerError.bind(this)
  }

  setInitialState(props) {
    this.state = {
      errors: {},
      isLoading: false,
      values: populate(props.fields, 'name', 'initialValue', ''),
    }
  }

  onChange({ target }) {
    this.setState({
      values: update(this.state.values, target.name, target.value),
    })
  }

  onSubmit(e) {
    e.preventDefault()
    const { errors, isValid } = this.validateInput()
    if (isValid) {
      this.setState({ errors: {}, isLoading: true })
      this.props.onSubmit(this.state.values, this.handleServerError)
    } else {
      this.setState({ errors })
    }
  }

  validateInput() {
    const { values } = this.state
    const { fields } = this.props

    const errors = {}
    fields.forEach((field) => {
      if (
        field.required &&
        Validator.isNull(values[field.name])
      ) {
        errors[field.name] = 'This field is required'
      } else if (
        field.validateEmail &&
        !Validator.isEmail(values[field.name])
      ) {
        errors[field.name] = 'Email is invalid'
      } else if (
        field.validateEqualTo &&
        !Validator.equals(values[field.name], values[field.validateEqualTo])
      ) {
        errors[field.name] = `Does not match with ${field.validateEqualTo}`
      }
    })

    return {
      errors,
      isValid: isEmpty(errors),
    }
  }

  handleServerError({ response }) {
    this.setState({
      errors: response.data.errors,
      isLoading: false,
    })
  }

  render() {
    const { errors, isLoading, values } = this.state
    const { fields, title, submitButtonText } = this.props

    return (
      <form onSubmit={this.onSubmit}>
        <h1>{title}</h1>

        {errors.form &&
          <div className="alert alert-danger">
            {errors.form}
          </div>
        }

        {fields.map((field, index) => (
          field.type === 'select'
          ? (
            <SelectFieldGroup
              name={field.name}
              label={field.label}
              value={values[field.name]}
              error={errors[field.name]}
              options={field.options}
              defaultOption={field.defaultOption}
              onChange={this.onChange}
              key={index}
            />
          )
          : (
            <TextFieldGroup
              type={field.type || 'text'}
              name={field.name}
              label={field.label}
              value={values[field.name]}
              error={errors[field.name]}
              onChange={this.onChange}
              key={index}
            />
          )
        ))}

        <div className="form-group">
          <button
            className="btn btn-primary btn-lg"
            disabled={isLoading}
          >
            {submitButtonText}
          </button>
        </div>
      </form>
    )
  }
}

Form.propTypes = {
  title: React.PropTypes.string.isRequired,
  submitButtonText: React.PropTypes.string,
  fields: React.PropTypes.arrayOf(React.PropTypes.object),
  onSubmit: React.PropTypes.func.isRequired,
}

Form.defaultProps = {
  submitButtonText: 'Submit',
}

export default Form
