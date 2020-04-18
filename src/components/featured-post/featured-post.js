import React from "react"
import PropTypes from "prop-types"

// Components
import { Link } from "gatsby"
import PreviewCompatibleImage from '../preview-compatible-image'
import { kebabCase } from 'lodash'
import './featured-post.scss'

const FeaturedPost = ({ data }) => {
  const { edges: posts } = data
  return (
    <div className="FeaturedPost">
    {posts &&
      posts.map(({ node: post }) => (
        <div>
          {post.frontmatter.featuredpost ? (
            <article
              className={`featured-post-container ${
                post.frontmatter.featuredpost ? 'is-featured' : ''
              }`}
            >
              <div className="featured-post-content">
                <Link to={`/categories/category-${kebabCase(post.frontmatter.category)}/`} className="text-black">
                  <span className="roll-category">{post.frontmatter.category}</span>
                </Link>
                <Link
                  className="featured-title"
                  to={post.fields.slug}
                >
                  {post.frontmatter.title}
                </Link>
                <Link
                  className="featured-details featured-excerpt"
                  to={post.fields.slug}
                >
                  {post.excerpt}
                </Link>
                <div>
                  <div className="featured-author">
                    <Link to={`/authors/authors-${kebabCase(post.frontmatter.author)}/`} className="text-black">
                      {post.frontmatter.author}
                    </Link>
                  </div>
                  <div className="featured-details">
                    <span>{post.frontmatter.date} ·&nbsp;</span>
                    <span>{post.timeToRead} min read</span>
                  </div>
                </div>
              </div>
              <div className="featured-image-container">
                {post.frontmatter.featuredimage ? (

                    <Link
                      className="featured-post-image"
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
          ) : null}
        </div>
      ))}
    </div>
  )
}

FeaturedPost.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default FeaturedPost
