import React from "react"
import PropTypes from 'prop-types'
import './banners.scss'

const Fullban = ({ heading, subheading }) => {
  return (
    <section
      style={{
        backgroundImage: `url(https://res.cloudinary.com/db4y7ocbu/image/upload/v1528328041/sample.jpg)`
      }}
    class="big-banner display-banner">
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
}

export default Fullban
