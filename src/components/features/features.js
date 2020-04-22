import React from "react"
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import PreviewCompatibleImage from '../preview-compatible-image'
import './features.scss'


const Feature = ({ image, site, content, direction }) => {
  return (
    <div className="oh-feature">
      <section class={`feature-container ${direction}-feature`}>
        <div class="feature-image-container">
          <div className="feature-image">
            <PreviewCompatibleImage
              imageInfo={{
                image: image,
                alt: `featured image for About page`,
              }}
            />
          </div>
        </div>
        <div class="feature-content">
          <h1>About {site}</h1>
          <p>{content}</p>
          <Link
            className="text-black"
            to={`/about/`}
          >
          <p>Read More</p>
          </Link>
        </div>
      </section>
    </div>
  )
}

Feature.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  page: PropTypes.string,
  content: PropTypes.string,
}

export default Feature
