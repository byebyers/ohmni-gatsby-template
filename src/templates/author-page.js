import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import PreviewCompatibleImage from '../components/preview-compatible-image'

export default ({ data }) => {
  const author = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{author.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: author.description }} />
        <PreviewCompatibleImage
          imageInfo={{
            image: author.frontmatter.thumbnail,
            alt: `featured image thumbnail for post ${author.frontmatter.title}`,
          }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query AuthorPage($id: String!) {
    markdownRemark(id: { eq: $id } frontmatter: { templateKey: { eq: "author-page" } }) {
      html
      frontmatter {
        title
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
