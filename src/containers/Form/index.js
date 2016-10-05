import React from 'react'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import TextFieldGroup from '../../components/common/TextFieldGroup'
import SelectFieldGroup from '../../components/common/SelectFieldGroup'

import * as actions from './actions'

class Form extends React.Component {

  componentWillMount() {
    // TODO remove this, unclean and causes an additional render
    this.props.actions.initialize(this.props.fields)
  }

  render() {
    const {
      state,
      actions,
      fields,
      submitButtonText,
      submit,
      title,
    } = this.props

    // TODO can this be avoided?
    if (isEmpty(state.values)) return null

    return (
      <form onSubmit={actions.validateForm({ fields, submit })}>
        <h1>{title}</h1>

        {state.errors.form &&
          <div className="alert alert-danger">
            {state.errors.form}
          </div>
        }

        {fields.map((field, index) => (
          field.type === 'select'
          ? (
            <SelectFieldGroup
              name={field.name}
              label={field.label}
              value={state.values[field.name]}
              error={state.errors[field.name]}
              options={field.options}
              defaultOption={field.defaultOption}
              onChange={actions.updateField}
              key={index}
            />
          )
          : (
            <TextFieldGroup
              type={field.type || 'text'}
              name={field.name}
              label={field.label}
              value={state.values[field.name]}
              error={state.errors[field.name]}
              onChange={actions.updateField}
              onBlur={actions.onBlur}
              key={index}
            />
          )
        ))}

        <div className="form-group">
          <button
            className="btn btn-primary btn-lg"
            disabled={state.isLoading}
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
  submit: React.PropTypes.func.isRequired,
  actions: React.PropTypes.shape().isRequired, // TODO check is there a map proptype?
  state: React.PropTypes.shape({
    errors: React.PropTypes.object.isRequired,
    values: React.PropTypes.object.isRequired,
    isLoading: React.PropTypes.bool.isRequired,
  }),
}

Form.defaultProps = {
  submitButtonText: 'Submit',
}

const mapStateToProps = ({ form }) => ({
  state: form,
})

const mapDispatchToProps = dispatch => ({
  // NOTE experiment to have actions namespaced in props and not mixed in with
  // passed props ... can we do the same thing with state?
  actions: {
    updateField: e =>
      dispatch(actions.updateField(e.target.name, e.target.value)),

    validateForm: props => (e) => {
      e.preventDefault()
      dispatch(actions.validateForm(props))
    },

    initialize: fields =>
      dispatch(actions.initialize(fields)),

    onBlur: e =>
      dispatch(actions.onBlur(e.target.name, e.target.value)),
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)