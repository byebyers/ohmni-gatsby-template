import React from "react"
import PropTypes from 'prop-types'
import './columns.scss'


const Onecol = ({ onecolheadline, onecolcontent }) => {
  return (
    <section class="oh-col">
      <div class="one-col-div">
            <h1>{onecolheadline}</h1>
            <p>{onecolcontent}</p>
      </div>
    </section>
  )
}

Onecol.propTypes = {
  onecolheadline: PropTypes.string.isRequired,
  onecolcontent: PropTypes.string,
}

export default Onecol
