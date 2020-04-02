import React from "react"
import PropTypes from "prop-types"

// Components
import { Link, graphql } from "gatsby"
import PreviewCompatibleImage from '../preview-compatible-image'
import Layout from '../layout/layout'
import Container from '../container/container'
import '../rolls/rolls.scss'

const TagRoll = ({ pageContext, data }) => {
    const { tag } = pageContext
    const { edges: posts, totalCount: tcount } = data.allMarkdownRemark
    const tagHeader = `${tcount} post${
      tcount === 1 ? "" : "s"
    } tagged with "${tag}"`

    return (
      <div>
      <Layout>
      <Container>
      <h1 className="roll-header">{tagHeader}</h1>
      {posts &&
        posts.map(({ node: post }) => (
            <article
              className={`roll-post-container ${
                post.frontmatter.featuredpost ? 'is-featured' : ''
              }`}
            >
              <div className="roll-post-content">
                <span className="roll-category">Category</span>
                <Link
                  className="roll-title"
                  to={post.fields.slug}
                >
                  {post.frontmatter.title}
                </Link>
                <Link
                  className="roll-details roll-excerpt"
                  to={post.fields.slug}
                >
                  {post.excerpt}
                </Link>
                <div>
                  <div className="roll-author">
                    {post.frontmatter.author}
                  </div>
                  <div className="roll-details">
                    <span>{post.frontmatter.date} ·&nbsp;</span>
                    <span>{post.timeToRead} min read</span>
                  </div>
                </div>
              </div>
              <div className="roll-image-container">
                {post.frontmatter.featuredimage ? (

                    <Link
                      className="roll-post-image"
                      to={post.fields.slug}
                    >
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      }}
                    />
                    </Link>

                ) : null}
              </div>
            </article>
        ))}
      </Container>
      </Layout>
      </div>
    )
}

TagRoll.propTypes = {
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

export default TagRoll

export const pageQuery = graphql`
  query($tag: String) {
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
            tags
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
