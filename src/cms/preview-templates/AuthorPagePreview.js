import React from 'react'
import PropTypes from 'prop-types'

// Components
import { AuthorPageTemplate } from '../../templates/author-page'
import Container from '../../components/container/container'

/* This is the CMS preview of author pages
  You can inspect elements or console this page in the CMS
  under Authors. You can pick any author. */
const AuthorPagePreview = ({ entry, widgetFor }) => {
  /* This links CMS entry with template variables
    Data is pulled from author page query
    WidgetFor is from Netlify CMS config */
  const data = entry.getIn(['data']).toJS()
  if (data) {
    return (
      <Container>
        <AuthorPageTemplate
          title={data.title}
          description={data.description}
          thumbnail={data.image}
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
