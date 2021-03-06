import React from "react"
import PropTypes from "prop-types"

// Components
import { graphql } from "gatsby"
import Layout from '../layout/layout'
import Container from '../container/container'
import BlogRoll from '../rolls/blog-roll'

//Styles
/* Includes styles from rolls.scss which are already defined in rolls folder */

/* This is actually a page created from
  node.js. It takes a tag and filters
  posts that are connected to it. */
const TagPage = ({ pageContext, data }) => {
    const { tag } = pageContext
    const { totalCount: tcount } = data.allMarkdownRemark
    const tagHeader = `${tcount} article${
      tcount === 1 ? "" : "s"
    } tagged with ${tag}`
    return (
      <div>
        <Layout>
          <Container>
            <h1 className="roll-header">{tagHeader}</h1>
            <BlogRoll data={data.allMarkdownRemark} />
          </Container>
        </Layout>
      </div>
    )
}

TagPage.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default TagPage

/* This filters all blog posts related
  to this tag */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
            tags
            date(formatString: "MMMM DD, YYYY")
            featured
            image {
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
