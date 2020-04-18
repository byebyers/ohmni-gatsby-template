import React from 'react'
import PropTypes from 'prop-types'

// Components
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Container from '../components/container/container'
import BlogRoll from '../components/rolls/blog-roll'

const CategoryPage = ({ data }) => {
  const { allMarkdownRemark: owner} = data
  return (
    <Layout>
      <Container>
        <BlogRoll data={owner} />
      </Container>
    </Layout>
  )
}

CategoryPage.propTypes = {
  pageContext: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
  data: PropTypes.object,
}

export default CategoryPage

export const query = graphql`
  query CategoryPage($title: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {frontmatter: {templateKey: {eq: "blog-post"}, category: { in: [$title] }}}
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 400)
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