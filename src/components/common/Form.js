import React from 'react'
import TextFieldGroup from '../common/TextFieldGroup'

class Form extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      errors: {},
      isLoading: false,
      values: props.fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {}), // FIXME
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.handleServerError = this.handleServerError.bind(this)
  }

  onChange(e) {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value,
      },
    })
  }

  onSubmit(e) {
    e.preventDefault()
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true })
      this.props.onSubmit(this.state.values, this.handleServerError)
    }
  }

  isValid() {
    const { errors, isValid } = this.props.validateInput(this.state.values)
    if (!isValid) {
      this.setState({ errors })
    }
    return isValid
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

        { errors.form &&
          <div className="alert alert-danger">
            {errors.form}
          </div>
        }

        {/* TODO can we map over */}
        {fields.map((field, index) => (
          <TextFieldGroup
            type={field.type || 'text'}
            field={field.name}
            label={field.label}
            value={values[field.name]}
            error={errors[field.name]}
            onChange={this.onChange}
            key={index}
          />
        ))}

        <div className="form-group">
          <button
            className="btn btn-primary btn-lg"
            disabled={isLoading}
          >
            {submitButtonText || 'Submit'}
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
  validateInput: React.PropTypes.func.isRequired,
}

export default Form
