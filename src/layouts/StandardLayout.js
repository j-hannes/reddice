import React from 'react'

const StandardLayout = (props) =>
  <div className="row">
    <div className="col-md-4 col-md-offset-4">
      {props.children}
    </div>
  </div>

export default StandardLayout
