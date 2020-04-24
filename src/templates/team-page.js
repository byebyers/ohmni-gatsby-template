import React from "react"
import PropTypes from 'prop-types'

// Components
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Container from '../components/container/container'
import Content, { HTMLContent } from '../components/content/content'
import Team from '../components/team/team'

export const TeamPageTemplate = ({
  body,
  contentComponent,
  data,
 }) => {
  const PageContent = contentComponent || Content
  return (
    <div>
      <Container>
          <PageContent className="content" content={body} />
      </Container>
      <Container>
        <Team data={data} />
      </Container>
    </div>
  )
}

TeamPageTemplate.propTypes = {
  body: PropTypes.string,
}

const TeamPage = ({ data }) => {
  const { teamPage: page } = data

  return (
    <Layout>
      <TeamPageTemplate
        contentComponent={HTMLContent}
        body={page.html}
        data={data.teamMembers}
      />
    </Layout>
  )
}

TeamPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TeamPage

export const teamPageQuery = graphql`
  query TeamPageQuery($id: String) {
    teamPage: markdownRemark(id: { eq: $id } frontmatter: {templateKey: {eq: "team-page"}, path: {eq: "/team"}}, fields: {}) {
      html
    }
    teamMembers: allMarkdownRemark(
      filter: {frontmatter: {templateKey: {eq: "team-page"}}}
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            name
          }
        }
      }
    }
  }
`
