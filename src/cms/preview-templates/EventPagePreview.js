import React from 'react'
import PropTypes from 'prop-types'

// Components
import { EventPostTemplate } from '../../templates/event-page'
import moment from 'moment'

/* This is the CMS preview of an Event Page
  You can inspect elements or console this page in the CMS
  under Events. You can pick any event. */
  const EventPostPreview = ({ entry, widgetFor }) => {
    /* This links CMS entry with template variables
      Data is pulled from author page query
      WidgetFor is from Netlify CMS config */
    const data = entry.getIn(['data']).toJS()
    /* Post date has to be defined with moment
      because we cant pull data from a post */
    const firstDate = moment(data.start_date).format('dddd, MMMM Do')
    const secondDate = moment(data.end_date).format('dddd, MMMM Do')
    return (
      <EventPostTemplate
        title={data.title}
        start={firstDate}
        end={secondDate}
        image={data.image}
        description={data.description}
        content={data.body}
        photoCredit={data.photoCredit}
      />
    )
  }

  EventPostPreview.propTypes = {
    entry: PropTypes.shape({
      getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
  }

  export default EventPostPreview
