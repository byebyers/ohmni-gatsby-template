import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from '../preview-compatible-image'
import './rolls.scss'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
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
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
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
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
