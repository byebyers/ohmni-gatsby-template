import React from "react"
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import PreviewCompatibleImage from '../preview-compatible-image'
import './features.scss'


const Feature = ({ image, heading, content, direction, link }) => {

  if (link) {
    const pagelink = link
    const pageinfo = pagelink.split("-")
    const pagename = pageinfo[0]
    return (
      <div className="oh-feature">
        <section className={`feature-container ${direction}-feature`}>
          <div className="feature-image-container">
            <div className="feature-image">
              <PreviewCompatibleImage
                imageInfo={{
                  image: image,
                  alt: `featured image for About page`,
                }}
              />
            </div>
          </div>
          <div className="feature-content">
            <h1>{heading}</h1>
            <p>{content}</p>
            <Link
              className="text-black"
              to={`/${pagename}/`}
            >
              <p>Read More</p>
            </Link>
          </div>
        </section>
      </div>
    )
  } else {
    return (
      <div className="oh-feature">
        <section className={`feature-container ${direction}-feature`}>
          <div className="feature-image-container">
            <div className="feature-image">
              <PreviewCompatibleImage
                imageInfo={{
                  image: image,
                  alt: `featured image for About page`,
                }}
              />
            </div>
          </div>
          <div className="feature-content">
            <h1>{heading}</h1>
            <p>{content}</p>
          </div>
        </section>
      </div>
    )
  }
}

Feature.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  page: PropTypes.string,
  content: PropTypes.string,
}

export default Feature
