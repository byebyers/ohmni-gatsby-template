import React from "react"

// Components
import { Link } from "gatsby"
import PreviewCompatibleImage from '../preview-compatible-image'
import { kebabCase } from 'lodash'

// Styles
import './rolls.scss'

/* types are either featured or roll */
const RollItem = ({
  rollType,
  category,
  slug,
  title,
  excerpt,
  author,
  date,
  timeToRead,
  image,
  video,
}) => {
  const letter = rollType[0]
  return (
    <article className={`${rollType}-post-container`}>
      <div className="roll-post-content">
        {/* Category */}
        <Link to={`/categories/category-${kebabCase(category)}/`} className="text-black">
          <span className="roll-category">{category}</span>
        </Link>
        {/* Title */}
        <Link
          className={`roll-title ${letter}-s`}
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
          {/* Author */}
          <div className="roll-author">
            <Link to={`/authors/authors-${kebabCase(author)}/`} className="text-black">
              {author}
            </Link>
          </div>
          {/* Date & Time to read */}
          <div className="roll-details">
            <span>{date} ·&nbsp;</span>
            <span>{timeToRead} min read</span>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className={`roll-image-container ${rollType}-image`}>
        {video ? (

            <Link
              className="roll-post-image"
              to={slug}
            >
            <div className="watermark">
              <PreviewCompatibleImage
                imageInfo={{
                  image: image,
                  alt: `featured image for post ${title}`,
                }}
              />
            </div>
            </Link>

        ) : (

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

        )}
      </div>
    </article>
  )
}

export default RollItem
