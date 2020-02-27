import React from "react"
import PropTypes from 'prop-types'
import './banners.scss'

const Fullban = ({ heading, subheading, banner }) => {
  return (
    <section
      style={{
        backgroundImage: `url('../..${banner}')`
      }}
    className="big-banner display-banner">
      <div className="cover-background">
        <div className="title-wrap">
          <h1>{heading}</h1>
          <p className="big-content">{subheading}</p>
        </div>
      </div>
    </section>
  )
}

Fullban.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
  banner: PropTypes.string,
}

export default Fullban
