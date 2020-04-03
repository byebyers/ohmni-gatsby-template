import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../preview-compatible-image'
import './author-section.scss'


const AuthorSection = ({
  author,
  desc,
  thumb,
}) => {
  return (
    <div className="author-container">
      <div className="author-image-container">
        <div className="author-image">
          <PreviewCompatibleImage
            imageInfo={{
              image: thumb,
              alt: `featured image thumbnail for post ${author}`,
            }}
          />
        </div>
      </div>
      <div className="author-content">
        <h1>{author}</h1>
        <div dangerouslySetInnerHTML={{ __html: desc }} />
      </div>
    </div>
  )
}

AuthorSection.propTypes = {
  author: PropTypes.string,
  desc: PropTypes.string,
  thumb: PropTypes.string,
}

export default AuthorSection
