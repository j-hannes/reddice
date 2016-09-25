import React from 'react'
import { connect } from 'react-redux'
import FlashMessage from './FlashMessage'
import { Message, func } from '../../types'
import { deleteFlashMessage } from '../../actions/flashMessages'

class FlashMessageList extends React.Component {
  render() {
    const messages = this.props.messages.map(message =>
      <FlashMessage
        key={message.id}
        message={message}
        deleteFlashMessage={this.props.deleteFlashMessage}
      />
    )
    return (
      <div>{messages}</div>
    )
  }
}

FlashMessageList.propTypes = {
  messages: Message,
  deleteFlashMessage: func,
}

function mapStateToProps(state) {
  return {
    messages: state.flashMessages,
  }
}

export default connect(mapStateToProps, {
  deleteFlashMessage,
})(FlashMessageList)
