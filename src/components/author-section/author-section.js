import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../preview-compatible-image'
import Social from '../social/social'
import './author-section.scss'


const AuthorSection = ({
  author,
  desc,
  thumb,
  facebook,
  instagram,
  linkedin,
  twitter,
  inWebsite,
  inMail,
}) => {
  return (
    <div className="author-container">
      <div className="author-image-container">
        <div className="author-image">
          <PreviewCompatibleImage
            imageInfo={{
              image: thumb,
              alt: `featured image thumbnail for author ${author}`,
            }}
          />
        </div>
      </div>
      <div className="author-content">
        <h1>{author}</h1>
        <div dangerouslySetInnerHTML={{ __html: desc }} />

      </div>
      <Social
        facebook={facebook}
        instagram={instagram}
        linkedin={linkedin}
        twitter={twitter}
        inWebsite={inWebsite}
        inMail={inMail}
      />
    </div>
  )
}

AuthorSection.propTypes = {
  author: PropTypes.string,
  desc: PropTypes.string,
  thumb: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  facebook: PropTypes.string,
  instagram: PropTypes.string,
  linkedin: PropTypes.string,
  twitter: PropTypes.string,
  inWebsite: PropTypes.string,
  inMail: PropTypes.string,
}

export default AuthorSection
