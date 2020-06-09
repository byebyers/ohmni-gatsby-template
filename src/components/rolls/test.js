rt React from "react"
import PropTypes from "prop-types"

// Components
import RollItem from './roll-item'

/* BlogRoll maps all posts onto a component.
  Posts are labeled as articles in the
  CMS under News*/
const BlogRoll = ({ data, featured }) => {
  const { edges: posts } = data
  const [isFeatured] = React.useState(featured)
  const [appPosts, setAppPosts] = React.useState(posts)

  /* If we want to only filter feature post(s) */
  if (featured) {
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
