import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../preview-compatible-image'
import './team.scss'

const Team = ({ data, header }) => {
  const { edges: members } = data
  return (
    <section className="member-section">
      <h1>{header}</h1>
      <div className="member-container">
      {members &&
        members.map(({node: member}) => (
          <div>
            {member.frontmatter.thumbnail ? (
              <div className="team-image-container">
                <PreviewCompatibleImage
                  imageInfo={{
                    image: member.frontmatter.thumbnail,
                    alt: `featured image for team member ${member.frontmatter.name}`,
                  }}
                />
              </div>
            ) : ''}
            <div className="team-content">
              <h3>{member.frontmatter.name}</h3>
              <p>{member.frontmatter.title}</p>
            </div>
          </div>
        ))}
        </div>
    </section>
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
