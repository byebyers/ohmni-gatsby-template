import React from 'react'
import PropTypes from 'prop-types'

const YouTubePlayer = ({ id, title }) => {
  return (
    <div>
      <iframe
      title={title}
      width="768"
      height="432"
      src={`https://www.youtube.com/embed/${id}`}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
    </div>
  )
}

YouTubePlayer.propTypes = {
  id: PropTypes.string,
}

export default YouTubePlayer
