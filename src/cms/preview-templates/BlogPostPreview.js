import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'
import moment from 'moment'

const BlogPostPreview = ({ entry, widgetFor, fieldsMetaData  }) => {
  const data = entry.getIn(['data']).toJS()
  const tags = entry.getIn(['data', 'tags'])
  const postDate = moment(data.date).format('MMMM DD, YYYY')
  const fields = fieldsMetaData.toJS()
  console.log(fields)

  if (data && tags  && fields.author) {
    const authorObj = fields.author.authors
    const postAuthor = data.author
    const authorData = authorObj[postAuthor]
    const authorThumb = authorData.thumbnail
    return (
      <BlogPostTemplate
        content={data.body}
        description={data.description}
        featuredimage={data.featuredimage}
        author={postAuthor}
        thumbnail={authorThumb}
        date={postDate}
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
