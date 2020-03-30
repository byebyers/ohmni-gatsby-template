import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from '../preview-compatible-image'
import './blog-roll.scss'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="oh-post">
        <div className="posts-div">
        {posts &&
          posts.map(({ node: post }) => (
              <article
                className={`blog-post-container ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <div className="blog-post-content">
                  <span className="blog-category">Category</span>
                  <Link
                    className="blog-title"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                  <Link
                    className="blog-details blog-excerpt"
                    to={post.fields.slug}
                  >
                    {post.excerpt}
                  </Link>
                  <div>
                    <div className="blog-author">
                      {post.frontmatter.author}
                    </div>
                    <div className="blog-details">
                      <span>{post.frontmatter.date} ·&nbsp;</span>
                      <span>{post.timeToRead} min read</span>
                    </div>
                  </div>
                </div>
                <div className="blog-image-container">
                  {post.frontmatter.featuredimage ? (
                    <div className="blog-post-image">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                </div>
              </article>
          ))}
          </div>
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
