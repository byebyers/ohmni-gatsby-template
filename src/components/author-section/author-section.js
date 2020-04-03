import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import PreviewCompatibleImage from '../components/preview-compatible-image'
import '.author-section.scss'


const AuthorSection = ({
  author,
  desc,
  thumb,
}) => {
  return (
    <div>
      <h1>{author}</h1>
      <div dangerouslySetInnerHTML={{ __html: desc }} />
      <PreviewCompatibleImage
        imageInfo={{
          image: thumb,
          alt: `featured image thumbnail for post ${author}`,
        }}
      />
    </div>
  )
}

AuthorSection.propTypes = {
  author: PropTypes.string,
  desc: PropTypes.string,
  thumb: PropTypes.string,
}

export default AuthorSection
