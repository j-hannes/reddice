import React from 'react'
import EventForm from './containers/EventForm'
import StandardLayout from '../../layouts/StandardLayout'

// route component needs to be a component class, so:
// eslint-disable-next-line react/prefer-stateless-function
class NewEventPage extends React.Component {
  render() {
    return (
      <StandardLayout>
        <EventForm />
      </StandardLayout>
    )
  }
}

export default NewEventPage
