import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'
import moment from 'moment'

const BlogPostPreview = ({ entry, widgetFor, fieldsMetaData  }) => {
  const data = entry.getIn(['data']).toJS()
  const tags = entry.getIn(['data', 'tags'])
  const postDate = moment(data.date).format('MMMM DD, YYYY')
  const fields = fieldsMetaData.toJS()

  if (data && tags && fields.author) {
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
        photoCredit={data.photoCredit}
      />
    )
  } else {
    return (
      <div
        style={{
          height: `100vh`,
          width: `100%`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
        }}>
        <h3>Please add an author and tags</h3>
      </div>
    )
  }
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default BlogPostPreview
