import React from 'react'

const StandardLayout = props =>
  <div className="row">
    <div className="col-md-4 col-md-offset-4">
      {props.children}
    </div>
  </div>

StandardLayout.propTypes = {
  // TODO look up what proptypes children should have
  // eslint-disable-next-line react/forbid-prop-types
  children: React.PropTypes.object,
}

export default StandardLayout
