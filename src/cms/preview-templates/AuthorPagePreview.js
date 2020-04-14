import React from 'react'
import PropTypes from 'prop-types'
import { AuthorPageTemplate } from '../../templates/author-page'

const AuthorPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    return (
      <AuthorPageTemplate
        title={data.title}
        description={data.description}
        thumbnail={data.thumbnail}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

AuthorPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default AuthorPagePreview
