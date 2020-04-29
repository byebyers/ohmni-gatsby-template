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
  advisordata,
 }) => {
  const PageContent = contentComponent || Content
  return (
    <div>
      <Container size={'regular'}>
          <PageContent className="content" content={body} />
      </Container>
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
  const { teamPage: page } = data

  return (
    <Layout>
      <TeamPageTemplate
        contentComponent={HTMLContent}
        body={page.html}
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

export const teamPageQuery = graphql`
  query TeamPageQuery($id: String) {
    teamPage: markdownRemark(id: { eq: $id } frontmatter: {templateKey: {eq: "team-page"}, path: {eq: "/team"}}, fields: {}) {
      html
    }
    teamMembers: allMarkdownRemark(
      filter: {frontmatter: {templateKey: {eq: "team-page"}, subKey: {eq: "team-member"}}}
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            position
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
