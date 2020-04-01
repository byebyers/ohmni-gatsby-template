import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'

const TagSection = ({ tags }) => {
  return (
    <div>
      {tags && tags.length ? (
        <div style={{ marginTop: `4rem` }}>
          <h4>Tags</h4>
          <ul className="taglist">
            {tags.map(tag => (
              <li key={tag + `tag`}>
                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}

TagSection.propTypes ={
  tags: PropTypes.string,
}

export default TagSection
