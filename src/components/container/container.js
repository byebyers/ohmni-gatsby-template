import React from 'react'
import PropTypes from 'prop-types'
import './container.scss'

const Container = ({ children }) => (
  <div className="container-wrapper main-content">
    <div className="container-div">
      <div>{children}</div>
    </div>
  </div>
)

Container.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

export default Container
