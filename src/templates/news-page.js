import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Container from '../components/container/container'
import BlogRoll from '../components/rolls/blog-roll'


const BlogPage = ({ data }) => {

  return (
    <Layout>
      <Container size={'regular'}>
        <BlogRoll
          data={data.allMarkdownRemark}
          featured={'yes'}
        />
        <h1>Latest</h1>
        <hr />
        <BlogRoll
          data={data.allMarkdownRemark}
        />
      </Container>
    </Layout>
  )
}

BlogPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogPage

export const blogPageQuery = graphql`
  query BlogPageTemplate {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            templateKey
            author
            category
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
