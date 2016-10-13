import React from 'react'
import { connect } from 'react-redux'
import FlashMessage from './components/FlashMessage'
import { deleteFlashMessage } from './actions'

const FlashMessageList = props =>
  <div>
    {props.messages.map(message =>
      <FlashMessage
        key={message.get('id')}
        message={message}
        deleteFlashMessage={props.deleteFlashMessage}
      />
    )}
  </div>

FlashMessageList.propTypes = {
  messages: React.PropTypes.shape(),
  deleteFlashMessage: React.PropTypes.func,
}

const mapStateToProps = state => ({
  messages: state.get('flashMessages'),
})

export default connect(mapStateToProps, {
  deleteFlashMessage,
})(FlashMessageList)
