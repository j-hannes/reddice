import React from 'react'
import classnames from 'classnames'
import map from 'lodash/map'

function TextFieldGroup(props) {
  return (
    <div className={classnames('form-group', { 'has-error': props.error })}>
      <label htmlFor={props.name} className="control-label">
        {props.label}
      </label>
      <select
        className="form-control"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      >
        <option value="" disabled>{props.defaultOption}</option>
        {map(props.options, (val, key) =>
          <option key={val} value={val}>{key}</option>
        )}
      </select>
      {props.error && <span className="help-block">{props.error}</span>}
    </div>

  )
}

TextFieldGroup.propTypes = {
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  options: React.PropTypes.shape().isRequired,
  defaultOption: React.PropTypes.string.isRequired,
}

export default TextFieldGroup
