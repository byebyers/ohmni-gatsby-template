import React from 'react'
import PropTypes from 'prop-types'

//Components
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Container from '../components/container/container'
import BlogRoll from '../components/rolls/blog-roll'

/* Check Netlify Config file for field data */
const BlogPage = ({ data }) => {

  return (
    <Layout>
      <Container size={'regular'}>
        {/* This filters for featured post(s) */}
        <BlogRoll
          data={data.allMarkdownRemark}
          type={'featured'}
        />
        <h1>Latest</h1>
        <hr />
        {/* Shows all post starting with latest */}
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

/* Filters for all posts */
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
            featured
            youtube
            image {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
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
