import React from "react"
import PropTypes from 'prop-types'

//Components
import { Link } from "gatsby"
import PreviewCompatibleImage from '../preview-compatible-image'

//Styles
import './features.scss'

/* This is a block container for content.
  See pages for use*/
const Feature = ({ image, heading, content, direction, link }) => {

  if (link) {
    /* Link is optionally provided from the cms as a drop down
      menu item on pages that include this component. It allows
      the page to link a page with a small description and image.
      However the data point recieved is pagename-page so we
      have to remove -page from that data point so it links
      correctly to the page specified. */
    const pagelink = link
    const pageinfo = pagelink.split("-")
    const pagename = pageinfo[0]
    return (
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
