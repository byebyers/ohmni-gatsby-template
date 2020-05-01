import React from "react"
import PropTypes from "prop-types"

//Styles
import './container.scss'

/* This provides additional padding to be
  used in container. Like a display case*/
const DisContainer = ({ children }) => {
  return (
    <section className="display-container">
      {children}
    </section>
  )
}

DisContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DisContainer
