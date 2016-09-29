import React from 'react'
import FieldGroup from './FieldGroup'


function TextFieldGroup(props) {
  return (
    <FieldGroup
      label={props.label}
      name={props.name}
      error={props.error}
    >
      <input
        className="form-control"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        type={props.type}
      />
    </FieldGroup>
  )
}

TextFieldGroup.propTypes = {
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func,
}

TextFieldGroup.defaultProps = {
  type: 'text',
}

export default TextFieldGroup
