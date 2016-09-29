import React from 'react'
import classnames from 'classnames'


function FieldGroup(props) {
  return (
    <div className={classnames('form-group', { 'has-error': props.error })}>

      <label htmlFor={props.name} className="control-label">
        {props.label}
      </label>

      {props.children}

      {props.error && <span className="help-block">{props.error}</span>}

    </div>
  )
}

FieldGroup.propTypes = {
  children: React.PropTypes.shape().isRequired,
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
}


export default FieldGroup
