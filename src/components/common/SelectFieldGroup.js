import React from 'react'
import map from 'lodash/map'
import FieldGroup from './FieldGroup'

function TextFieldGroup(props) {
  return (
    <FieldGroup
      label={props.label}
      name={props.name}
      error={props.error}
    >
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
    </FieldGroup>

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
