import React from 'react'
import classnames from 'classnames'


function TextFieldGroup(props) {
  return (
    <div className={classnames('form-group', { 'has-error': props.error })}>
      <label htmlFor={props.name} className="control-label">
        {props.label}
      </label>
      <input
        className="form-control"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.checkUserExists}
        type={props.type}
      />


      {props.error && <span className="help-block">{props.error}</span>}
    </div>
  )
}

TextFieldGroup.propTypes = {
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  checkUserExists: React.PropTypes.func,
}

TextFieldGroup.defaultProps = {
  type: 'text',
}

export default TextFieldGroup
