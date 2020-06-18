import React from "react"

// Components
import { Link } from "gatsby"
import PreviewCompatibleImage from '../preview-compatible-image'
import { kebabCase } from 'lodash'

// Styles
import './rolls.scss'

const EventItem = ({
  slug,
  title,
  excerpt,
  startdate,
  enddate,
  image,
}) => {
  return (
    <article className="roll-post-container">
      <div className="roll-post-content">
        {/* Category */}
        <Link to={`/categories/category-${kebabCase(slug)}/`} className="text-black">
          <span className="roll-category">Event</span>
        </Link>
        {/* Title */}
        <Link
          className="roll-title r-s"
          to={slug}
        >
          {title}
        </Link>
        {/* Excerpt */}
        <Link
          className="roll-details roll-excerpt"
          to={slug}
        >
          {excerpt}
        </Link>
        <div>
          {/* Nothing here */}
          <div className="roll-author">

          </div>
          {/* Dates */}
          <div className="roll-author">
            <span>Begins {startdate} - Ends&nbsp;</span>
            <span>{enddate}</span>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="roll-image-container r-image">
        {image ? (

            <Link
              className="roll-post-image"
              to={slug}
            >
            <PreviewCompatibleImage
              imageInfo={{
                image: image,
                alt: `featured image for post ${title}`,
              }}
            />
            </Link>

        ) : null}
      </div>
    </article>
  )
}

export default EventItem
