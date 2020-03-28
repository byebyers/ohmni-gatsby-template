import React from "react"
import PropTypes from 'prop-types'
import './banners.scss'

const Halfban = ({ heading, subheading, banner }) => {
  return (
    <section
      style={{
        backgroundImage: `url('${
          !!banner.childImageSharp ? banner.childImageSharp.fluid.src : banner
        }')`
      }}
    className="half-banner display-banner">
      <div className="cover-background">
        <div className="title-wrap">
          <h1>{heading}</h1>
          <p>{subheading}</p>
        </div>
      </div>
    </section>
  )
}

Halfban.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
  banner: PropTypes.string,
}

export default Halfban
