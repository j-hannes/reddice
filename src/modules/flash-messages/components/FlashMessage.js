import React from 'react'
import classnames from 'classnames'

class FlashMessage extends React.Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.props.deleteFlashMessage(this.props.message.get('id'))
  }

  render() {
    const { message } = this.props
    return (
      <div
        className={classnames('alert', {
          'alert-success': message.get('type') === 'success',
          'alert-danger': message.get('type') === 'error',
        })}
      >
        <button
          className="close"
          onClick={this.onClick}
        >
          <span>&times;</span>
        </button>
        {message.get('text')}
      </div>
    )
  }
}

FlashMessage.propTypes = {
  message: React.PropTypes.shape().isRequired,
  deleteFlashMessage: React.PropTypes.func.isRequired,
}

export default FlashMessage
