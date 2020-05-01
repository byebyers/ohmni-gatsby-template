import React from "react"
import PropTypes from 'prop-types'

//Styles
import './columns.scss'

/* Simple one column text box with title */
const Onecol = ({ headline, body }) => {
  return (
    <section className="one-col-div">
      <h1>{headline}</h1>
      <p>{body}</p>
    </section>
  )
}

Onecol.propTypes = {
  headline: PropTypes.string.isRequired,
  body: PropTypes.string,
}

export default Onecol
