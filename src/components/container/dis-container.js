import React from "react"
import PropTypes from "prop-types"
import './container.scss'


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
