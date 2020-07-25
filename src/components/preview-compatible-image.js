import React from 'react'
import PropTypes from 'prop-types'

//Components
import Img from 'gatsby-image'

/* This serves the best image in the browser */
const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = { borderRadius: '0px' }
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
    )
  }

  if (!!childImageSharp) {
    return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === 'string') {
    return <img style={imageStyle} src={image} alt={alt} />
  }

  else {
    return (
      <img style={imageStyle} src="/img/placeholder-image.png" alt="This is a placeholder" />
    )
  }
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
