import React from 'react'
import { connect } from 'react-redux'
import TextFieldGroup from '../common/TextFieldGroup'
import { createEvent } from '../../actions/eventActions'

class EventForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      errors: {},
      isLoading: false,
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.createEvent(this.state)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { errors, title, isLoading } = this.state
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Create New Game Event</h1>

        <TextFieldGroup
          field="title"
          label="Event Title"
          name="title"
          value={title}
          onChange={this.onChange}
          error={errors.title}
        />

        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            disabled={isLoading}
          >
            Submit
          </button>
        </div>
      </form>
    )
  }
}

EventForm.propTypes = {
  createEvent: React.PropTypes.func.isRequired,
}

export default connect(null, {
  createEvent,
})(EventForm)
