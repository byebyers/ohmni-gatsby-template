import React from "react"
import PropTypes from 'prop-types'

// Components
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Container from '../components/container/container'
import Content, { HTMLContent } from '../components/content/content'

export const TeamPageTemplate = ({
  body,
  contentComponent,
 }) => {
  const PageContent = contentComponent || Content
  return (
    <div>
      <Container>
          <PageContent className="content" content={body} />
      </Container>
    </div>
  )
}

TeamPageTemplate.propTypes = {
  body: PropTypes.string,
}

const TeamPage = ({ data }) => {
  const { markdownRemark: page } = data

  return (
    <Layout>
      <TeamPageTemplate
        contentComponent={HTMLContent}
        body={page.html}
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
    markdownRemark(id: { eq: $id } frontmatter: {templateKey: {eq: "team-page"}, path: {eq: "/team"}}, fields: {}) {
      html
    }
  }
`
