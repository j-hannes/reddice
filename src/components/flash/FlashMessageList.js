import React from 'react'
import { connect } from 'react-redux'
import FlashMessage from './FlashMessage'
import { Message, func } from '../../types'
import { deleteFlashMessage } from '../../actions/flashMessages'

const FlashMessageList = props =>
  <div>
    {props.messages.map(message =>
      <FlashMessage
        key={message.id}
        message={message}
        deleteFlashMessage={props.deleteFlashMessage}
      />
    )}
  </div>

FlashMessageList.propTypes = {
  messages: Message,
  deleteFlashMessage: func,
}

const mapStateToProps = state => ({
  messages: state.flashMessages,
})

export default connect(mapStateToProps, {
  deleteFlashMessage,
})(FlashMessageList)
