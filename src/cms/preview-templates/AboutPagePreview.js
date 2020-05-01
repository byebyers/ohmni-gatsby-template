import React from 'react'
import PropTypes from 'prop-types'

// Components
import { AboutPageTemplate } from '../../templates/about-page'


/* This is the CMS preview of about-page.js
  You can inspect elements or console this page in the CMS
  under Pages -> About */
const AboutPagePreview = ({ entry, widgetFor }) => {
  /* This links CMS entry with template variables
    Data is pulled from about page query
    WidgetFor is from Netlify CMS config */
  const data = entry.getIn(['data']).toJS()
  if (data) {
    return (
      <AboutPageTemplate
        heading={data.heading}
        subheading={data.subheading}
        banner={data.image}
        content={widgetFor('body')}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default AboutPagePreview
