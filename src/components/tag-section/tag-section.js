import React from 'react'
import PropTypes from 'prop-types'

//Components
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'

//Styles
import './tag-section.scss'


/* This component maps out tags from a
  blog post or article. It differs from
  tags.js because it only shows tags on a post. */
const TagSection = ({ tags }) => {
  return (
    <div>
      {tags && tags.length ? (
        <div style={{ marginTop: `4rem` }}>
          <ul className="taglist">
            {tags.map(tag => (
              <div className="tag-container">
                <li key={tag + `tag`}>
                  <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                </li>
              </div>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}

TagSection.propTypes = {
  tags: PropTypes.array,
}

export default TagSection
