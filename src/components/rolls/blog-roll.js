import React from "react"
import PropTypes from "prop-types"

// Components
import { Link } from "gatsby"
import PreviewCompatibleImage from '../preview-compatible-image'
import { kebabCase } from 'lodash'
import './rolls.scss'

const BlogRoll = ({ data }) => {
  const { edges: posts } = data
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
                    <Link to={`/authors/authors-${kebabCase(post.frontmatter.author)}/`} className="text-black">
                      {post.frontmatter.author}
                    </Link>
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
                        alt: `featured image for post ${post.frontmatter.title}`,
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

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default BlogRoll
