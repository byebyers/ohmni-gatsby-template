import React from 'react'
import PropTypes from 'prop-types'

// Components
import { IndexPageTemplate } from '../../templates/home-page'

/* This is the CMS preview of home-page.js
  You can inspect elements or console this page in the CMS
  under Pages -> Home */
const IndexPagePreview = ({ entry, getAsset }) => {
  /* This links CMS entry with template variables
    Data is pulled from author page query
    WidgetFor is from Netlify CMS config.
    getAsset = Returns the correct filePath
    or in-memory preview for uploaded images */
  const data = entry.getIn(['data']).toJS()
  if (data) {
    return (
      <IndexPageTemplate
        heading={data.heading}
        subheading={data.subheading}
        banner={data.image}
        headline={data.headline}
        body={data.body}
        description={data.aboutFeature.description}
        image={data.aboutFeature.image}
        featureheading={data.aboutFeature.heading}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
