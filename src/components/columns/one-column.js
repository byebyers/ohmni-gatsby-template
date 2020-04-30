import React from "react"
import PropTypes from 'prop-types'
import './columns.scss'


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
