import React from "react"
import PropTypes from "prop-types"

// Components
import RollItem from './roll-item'

// Styles
import './rolls.scss'

/* BlogRoll maps all posts onto a component.
  Posts are labeled as articles in the
  CMS under News*/
const BlogRoll = ({ data, featured }) => {
  const { edges: posts } = data
  /* If we want to only filter feature post(s) */
  return (
    <div>
      {posts &&
        posts.map(({ node: post }) => (
          <div>
            {post.frontmatter.featured ? (
              <RollItem
                rollType={'featured'}
                category={post.frontmatter.category}
                slug={post.fields.slug}
                title={post.frontmatter.title}
                excerpt={post.excerpt}
                author={post.frontmatter.author}
                date={post.frontmatter.date}
                timeToRead={post.timeToRead}
                image={post.frontmatter.image}
              />
            ) : null}
          </div>
        ))}
    </div>
  )
}
