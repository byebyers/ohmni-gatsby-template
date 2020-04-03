import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import AuthorSection from '../components/author-section/author-section'
import Container from '../components/container/container'

export default ({ data }) => {
  const author = data.markdownRemark
  return (
    <Layout>
      <Container>
      <AuthorSection
        author={author.frontmatter.title}
        desc={author.frontmatter.description}
        thumb={author.frontmatter.thumbnail}
      />
      <hr />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query AuthorPage($id: String!) {
    markdownRemark(id: { eq: $id } frontmatter: { templateKey: { eq: "author-page" } }) {
      html
      frontmatter {
        title
        description
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
`
