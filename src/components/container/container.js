import React from 'react'
import PropTypes from 'prop-types'
import './container.scss'

const Container = ({ children, size, height }) => (
  <div className={`container-wrapper ${height ? 'con-small' : 'con-regular'} col-${size}`}>
    <div className="container-div">
      {children}
    </div>
  </div>
)

Container.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

export default Container
