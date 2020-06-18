import React from 'react'
import PropTypes from 'prop-types'

//Components
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Container from '../components/container/container'
import BlogRoll from '../components/rolls/blog-roll'

const CalPage = ({ data }) => {
  return (
    <Layout>
      <Container size={'regular'}>
        <h1>Latest</h1>
        <hr />
        {/* Shows all events starting with latest */}
        <BlogRoll
          data={data.allMarkdownRemark}
          type={'event'}
        />
      </Container>
    </Layout>
  )
}

CalPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default CalPage

/* Filters for all events */

export const calPageQuery = graphql`
  query CalPageTemplate {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "event-page" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            start_date(formatString: "dddd, MMMM Do")
            end_date(formatString: "dddd, MMMM Do")
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
