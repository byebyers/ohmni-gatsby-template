import React from 'react'
import PropTypes from 'prop-types'

// Components
import { BlogPostTemplate } from '../../templates/blog-post'
import moment from 'moment'

/* This is the CMS preview of a blog post
  blog post were relabeled news in CMS and site.
  You can inspect elements or console this page in the CMS
  under News. You can pick any article. */
const BlogPostPreview = ({ entry, widgetFor, fieldsMetaData  }) => {
  /* This links CMS entry with template variables
    Data is pulled from author page query
    WidgetFor is from Netlify CMS config */
  const data = entry.getIn(['data']).toJS()
  /* tags is separated from data */
  const tags = entry.getIn(['data', 'tags'])
  /* Post date has to be defined with moment
    because we cant pull data from a post */
  const postDate = moment(data.date).format('MMMM DD, YYYY')
  /* fieldsMetaData comes from node.js to pull author data */
  const fields = fieldsMetaData.toJS()
  /* we need tags and author defined in CMS for this to show */
  if (data && tags && fields.author) {
    const authorObj = fields.author.authors
    const postAuthor = data.author
    const authorData = authorObj[postAuthor]
    const authorThumb = authorData.image
    return (
      <BlogPostTemplate
        content={data.body}
        description={data.description}
        image={data.image}
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
