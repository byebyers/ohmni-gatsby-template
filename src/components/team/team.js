import React from 'react'
import PropTypes from 'prop-types'

//Components
import PreviewCompatibleImage from '../preview-compatible-image'

//Styles
import './team.scss'


/* This component maps members from the CMS in
  Team and Advisor pages. */
const Team = ({ data, header, number }) => {
  const { edges: members } = data
  return (
    <section className="member-section">
      <h1 className="member-title">{header}</h1>
      <hr />
      {/* Number represents how many columns. Either two or three */}
      <div className={`member-container ${number}-column`}>
      {members &&
        members.map(({node: member}) => (
          <div>
            {/* Checks for image. Team members have one but advisors dont */}
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
            {/* This makes sure that text is centered for advisor section */}
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
