import React from "react"
import PropTypes from "prop-types"

// Components
import RollItem from './roll-item'
import EventItem from './event-item'

/* BlogRoll maps all posts onto a component.
  Posts are labeled as articles in the
  CMS under News*/
const BlogRoll = ({ data, type }) => {
  const { edges: posts } = data
  /* If we want to only filter feature post(s) */
  if (type === 'featured') {
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
                  video={post.frontmatter.youtube}
                />
              ) : null}
            </div>
          ))}
      </div>
    )
  } else if (type === 'event') {
    return (
      <div>
      {posts &&
        posts.map(({ node: post }) => (
          <div>
            <EventItem
              slug={post.fields.slug}
              title={post.frontmatter.title}
              excerpt={post.excerpt}
              startdate={post.frontmatter.start_date}
              enddate={post.frontmatter.end_date}
              image={post.frontmatter.image}
            />
          </div>
        ))}
      </div>
    )
  } else {
    return (
      <div>
        {posts &&
          posts.map(({ node: post }) => (
            <RollItem
              rollType={'roll'}
              category={post.frontmatter.category}
              slug={post.fields.slug}
              title={post.frontmatter.title}
              excerpt={post.excerpt}
              author={post.frontmatter.author}
              date={post.frontmatter.date}
              timeToRead={post.timeToRead}
              image={post.frontmatter.image}
              video={post.frontmatter.youtube}
            />
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
