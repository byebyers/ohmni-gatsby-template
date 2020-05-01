import React from "react"
import PropTypes from 'prop-types'

//Components
import PreviewCompatibleImage from '../preview-compatible-image'

//Styles
import './partners.scss'

/* Data to this component comes from the CMS in the partners section.
    All it really is are images of company logos that are mapped to
    the component. */
const Partners = ({ data }) => {
  const { edges: partners } = data
  return (
    <div className="partner-content">
      {partners &&
        partners.map(({ node: partner }) => (
          <div className="partner-item">
            <PreviewCompatibleImage
              imageInfo={{
                image: partner.frontmatter.image,
                alt: `featured image thumbnail for partner ${partner.frontmatter.title}`,
              }}
            />
          </div>
        ))}
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
