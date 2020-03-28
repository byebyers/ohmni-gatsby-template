import React from 'react'
import PropTypes from 'prop-types'
import './content.scss'

export const HTMLContent = ({ content, className }) => (
  <div className="content-wrapper">
    <div className="content-div">
      <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  </div>
)

const Content = ({ content, className }) => (
  <div className="content-wrapper">
    <div className="content-div">
      <div className={className}>{content}</div>
    </div>
  </div>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
