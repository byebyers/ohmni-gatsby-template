import React from 'react'
import PropTypes from 'prop-types'
import { AuthorPageTemplate } from '../../templates/author-page'
import Container from '../../components/container/container'

const AuthorPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    return (
      <Container>
        <AuthorPageTemplate
          title={data.title}
          description={data.description}
          thumbnail={data.thumbnail}
          facebook={data.facebook}
          instagram={data.instagram}
          linkedin={data.linkedin}
          twitter={data.twitter}
          inWebsite={data.inWebsite}
          inMail={data.inMail}
        />
      </Container>
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
