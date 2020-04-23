import React from "react"
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../preview-compatible-image'
import './partners.scss'

const Partners = ({ data }) => {
  const { edges: partners } = data
  return (
    <div className="oh-partner">
      <div className="partner-container">
        <h1>Partnered with</h1>
        <div className="partner-content">
        {partners &&
          partners.map(({ node: partner }) => (
            <div className="partner-item">
              <PreviewCompatibleImage
                imageInfo={{
                  image: partner.frontmatter.thumbnail,
                  alt: `featured image thumbnail for partner ${partner.frontmatter.title}`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

Partners.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default Partners
