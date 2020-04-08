import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'

const BlogPostPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  const tags = entry.getIn(['data', 'tags'])
  console.log(data)
  if (data && tags) {
    return (
      <BlogPostTemplate
        content={data.body}
        description={data.description}
        featuredimage={data.featuredimage}
        author={data.author}
        thumbnail={data.thumbnail}
        timeToRead={data.timeToRead}
        date={data.date.toString()}
        tags={tags && tags.toJS()}
        title={data.title}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default BlogPostPreview
