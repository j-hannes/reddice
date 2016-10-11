import React from 'react'
import { connect } from 'react-redux'
import { createEvent } from '../actions'
import Form from '../../../components/common/Form'

function EventForm(props) {
  return (
    <Form
      title="Create New Game Event"
      onSubmit={props.createEvent}
      fields={[
        {
          name: 'title',
          label: 'Event Title',
        },
      ]}
    />
  )
}

EventForm.propTypes = {
  createEvent: React.PropTypes.func.isRequired,
}

export default connect(null, {
  createEvent,
})(EventForm)
