import React from "react"
import PropTypes from 'prop-types'
import './columns.scss'


const Onecol = ({ onecolheadline, onecolcontent }) => {
  return (
    <section className="one-col-div">
      <h1>{onecolheadline}</h1>
      <p>{onecolcontent}</p>
    </section>
  )
}

Onecol.propTypes = {
  onecolheadline: PropTypes.string.isRequired,
  onecolcontent: PropTypes.string,
}

export default Onecol
