import React from 'react'
import PropTypes from 'prop-types'

// Components
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Container from '../components/container/container'
import BlogRoll from '../components/rolls/blog-roll'

/* This is actually a page created from
  node.js. It takes a category and filters
  posts that are connected to it. */
const CategoryPage = ({ pageContext, data }) => {
  const { title } = pageContext
  const { allMarkdownRemark: category} = data
  return (
    <Layout>
      <Container size={'regular'}>
        <h1>{title}</h1>
        <BlogRoll
          data={category}
        />
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

/* This filters all blog posts related
  to this category */
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
            image
          }
        }
      }
    }
  }
`
