import React from 'react'
import EventForm from './EventForm'

// route component needs to be a component class, so:
// eslint-disable-next-line react/prefer-stateless-function
class NewEventPage extends React.Component {
  render() {
    return (
      <div>
        <EventForm />
      </div>
    )
  }
}

export default NewEventPage
