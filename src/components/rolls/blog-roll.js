import React from "react"
import PropTypes from "prop-types"

// Components
import { Link } from "gatsby"
import PreviewCompatibleImage from '../preview-compatible-image'
import { kebabCase } from 'lodash'

// Styles
import './rolls.scss'

/* BlogRoll maps all posts onto a component.
  Posts are labeled as articles in the
  CMS under News*/
const BlogRoll = ({ data, featured }) => {
  const { edges: posts } = data
  /* If we want to only filter feature post(s) */
  if (featured) {
    return (
      <div>
        {posts &&
          posts.map(({ node: post }) => (
            <div>
              {post.frontmatter.featured ? (
                <article className="featured-post-container">
                  <div className="roll-post-content">
                    {/* Category */}
                    <Link to={`/categories/category-${kebabCase(post.frontmatter.category)}/`} className="text-black">
                      <span className="roll-category">{post.frontmatter.category}</span>
                    </Link>
                    {/* Title */}
                    <Link
                      className="roll-title f-s"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    {/* Excerpt */}
                    <Link
                      className="roll-details roll-excerpt"
                      to={post.fields.slug}
                    >
                      {post.excerpt}
                    </Link>
                    <div>
                      {/* Author */}
                      <div className="roll-author">
                        <Link to={`/authors/authors-${kebabCase(post.frontmatter.author)}/`} className="text-black">
                          {post.frontmatter.author}
                        </Link>
                      </div>
                      {/* Date & Time to read */}
                      <div className="roll-details">
                        <span>{post.frontmatter.date} ·&nbsp;</span>
                        <span>{post.timeToRead} min read</span>
                      </div>
                    </div>
                  </div>
                  {/* Image */}
                  <div className="roll-image-container featured-image">
                    {post.frontmatter.image ? (

                        <Link
                          className="roll-post-image"
                          to={post.fields.slug}
                        >
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.image,
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
  } else {
    return (
      <div>
        {posts &&
          posts.map(({ node: post }) => (
              <article className="roll-post-container">
                <div className="roll-post-content">
                  <Link to={`/categories/category-${kebabCase(post.frontmatter.category)}/`} className="text-black">
                    <span className="roll-category">{post.frontmatter.category}</span>
                  </Link>
                  <Link
                    className="roll-title r-s"
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
                  {post.frontmatter.image ? (

                      <Link
                        className="roll-post-image"
                        to={post.fields.slug}
                      >
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.image,
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
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default BlogRoll
