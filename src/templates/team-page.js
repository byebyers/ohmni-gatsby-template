import React from "react"
import PropTypes from 'prop-types'

// Components
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Container from '../components/container/container'
import Team from '../components/team/team'

/* Check Netlify Config file for field data */
export const TeamPageTemplate = ({
  data,
  advisordata,
 }) => {
  return (
    <div>
      <Container size={'regular'}>
        <Team
          data={data}
          header={'Team'}
          number={'three'}
        />
      </Container>
      <Container size={'regular'}>
        <Team
          data={advisordata}
          header={'Advisors'}
          number={'two'}
        />
      </Container>
    </div>
  )
}

TeamPageTemplate.propTypes = {
  body: PropTypes.string,
}

const TeamPage = ({ data }) => {
  return (
    <Layout>
      <TeamPageTemplate
        data={data.teamMembers}
        advisordata={data.advisorMembers}
      />
    </Layout>
  )
}

TeamPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TeamPage

/* Filters the following
  teamPage = data from team page
  teamMemvers = all Team members from CMS
  advisorMembers = all Advisor members from CMS */
export const teamPageQuery = graphql`
  query TeamPageQuery {
    teamMembers: allMarkdownRemark(
      filter: {frontmatter: {templateKey: {eq: "team-page"}, subKey: {eq: "team-member"}}}
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            position
            image
          }
        }
      }
    }
    advisorMembers: allMarkdownRemark(
      filter: {frontmatter: {templateKey: {eq: "team-page"}, subKey: {eq: "advisor-member"}}}
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            position
          }
        }
      }
    }
  }
`
