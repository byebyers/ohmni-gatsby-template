import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../preview-compatible-image'
import './team.scss'

const Team = ({ data, header, number }) => {
  const { edges: members } = data
  return (
    <section className="member-section">
      <h1 className="member-title">{header}</h1>
      <hr />
      <div className={`member-container ${number}-column`}>
      {members &&
        members.map(({node: member}) => (
          <div>
            {member.frontmatter.image ? (
              <div className="team-image-container">
                <PreviewCompatibleImage
                  imageInfo={{
                    image: member.frontmatter.image,
                    alt: `featured image for team member ${member.frontmatter.name}`,
                  }}
                />
              </div>
            ) : ''}
            <div className={`team-content ${member.frontmatter.image ? '' : 'center-content'}`}>
              <h3>{member.frontmatter.title}</h3>
              <p>{member.frontmatter.position}</p>
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
