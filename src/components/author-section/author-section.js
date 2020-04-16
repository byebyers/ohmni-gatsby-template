import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../preview-compatible-image'
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
  console.log(facebook)
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
        <div className="socialMedia">
          {facebook ? (
            <div className="socialItem"><a href={facebook} target="_blank" rel="noopener noreferrer"><img src="/img/facebook.svg" alt="Facebook icon and link"/><span className="text-black">Facebook</span></a></div>
          ) : null}
          {instagram ? (
            <div className="socialItem"><a href={instagram} target="_blank" rel="noopener noreferrer"><img src="/img/instagram.svg" alt="Instagram icon and link"/><span className="text-black">Instagram</span></a></div>
          ) : null}
          {linkedin ? (
            <div className="socialItem"><a href={linkedin} target="_blank" rel="noopener noreferrer"><img src="/img/linkedin.svg" alt="Linkedin icon and link"/><span className="text-black">LinkedIn</span></a></div>
          ) : null}
          {twitter ? (
            <div className="socialItem"><a href={twitter} target="_blank" rel="noopener noreferrer"><img src="/img/twitter.svg" alt="Twitter icon and link"/><span className="text-black">Twitter</span></a></div>
          ) : null}
          {inWebsite ? (
            <div className="socialItem"><a href={inWebsite} target="_blank" rel="noopener noreferrer"><img src="/img/link.svg" alt="Author's website icon and link"/><span className="text-black">Website</span></a></div>
          ) : null}
          {inMail ? (
            <div className="socialItem"><a href={`mailto:` + inMail} target="_blank" rel="noopener noreferrer"><img src="/img/mail.svg" alt="Author's email icon and link"/><span className="text-black">{inMail}</span></a></div>
          ) : null}
        </div>
      </div>
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
