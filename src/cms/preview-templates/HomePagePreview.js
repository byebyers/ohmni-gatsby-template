import React from 'react'
import { IndexPageTemplate } from '../../templates/home-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data =entry.getIn(['data'].toJS())

  if (data) {
    return (
      <IndexPageTemplate
        heading={data.heading}
        subheading={data.subheading}
        banner={data.banner}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default IndexPagePreview
