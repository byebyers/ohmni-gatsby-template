import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default ({ data }) => {
  const author = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{author.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: author.description }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query AuthorPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
