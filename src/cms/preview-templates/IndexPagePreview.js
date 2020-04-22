import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/home-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        heading={data.heading}
        subheading={data.subheading}
        banner={data.banner}
        onecolheadline={data.onecolheadline}
        onecolcontent={data.onecolcontent}
        aboutfeature={data.aboutfeature}
        featureimage={data.featureimage}
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
