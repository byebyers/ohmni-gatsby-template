import React from 'react'
import PropTypes from 'prop-types'
import { BlogPageTemplate } from '../../templates/blog-page'

const BlogPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <BlogPageTemplate
        heading={data.heading}
        subheading={data.subheading}
        banner={data.banner}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

BlogPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default BlogPagePreview
