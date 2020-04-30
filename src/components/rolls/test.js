import React from "react"
import PropTypes from "prop-types"

// Components
import { Link } from "gatsby"
import PreviewCompatibleImage from '../preview-compatible-image'
import { kebabCase } from 'lodash'

// Styles
import './rolls.scss'

import React from "react"
import PropTypes from "prop-types"

// Components
import { Link } from "gatsby"
import PreviewCompatibleImage from '../preview-compatible-image'
import { kebabCase } from 'lodash'

// Styles
import './rolls.scss'

const BlogRoll = ({ data, featured }) => {
  const { edges: posts } = data
  return (
    <div>
      {posts &&
        posts.map(({ node: post }) => (
          <div>
            {post.frontmatter.featured ? (
              <article className="featured-post-container">
                <div className="roll-post-content">
                  <Link to={`/categories/category-${kebabCase(post.frontmatter.category)}/`} className="text-black">
                    <span className="roll-category">{post.frontmatter.category}</span>
                  </Link>
                  <Link
                    className="roll-title f-s"
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
}
