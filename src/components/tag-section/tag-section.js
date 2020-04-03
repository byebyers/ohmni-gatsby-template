import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'
import './tag-section.scss'

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
  tags: PropTypes.string,
}

export default TagSection
