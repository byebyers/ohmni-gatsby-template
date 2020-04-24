import React from 'react'
import PropTypes from 'prop-types'
import './team.scss'

const Team = ({ data }) => {
  const { edges: members } = data
  return (
    <div className="member-container">
      {members &&
        members.map(({node: member}) => (
          <div>
            {member.frontmatter.name}
          </div>
        ))}
    </div>
  )
}

Team.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default Team
