import React from "react"
import PropTypes from 'prop-types'

//Styles
import './banners.scss'

/* This is an image banner that takes up the full height
  of the view port.*/
const Fullban = ({ heading, subheading, banner }) => {
  return (
    <section
      /* Checks image source */
      style={{
        backgroundImage: `url('${
          !!banner.childImageSharp ? banner.childImageSharp.fluid.src : banner
        }')`
      }}
    className="big-banner display-banner">
      <div className="cover-background">
        <div className="title-wrap">
          <h1>{heading}</h1>
          <p>{subheading}</p>
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
