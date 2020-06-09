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
<<<<<<< HEAD
  /* If we want to only filter feature post(s) */
=======

  const [appPosts, setAppPosts] = React.useState(posts);

  const feature = event => {
    setAppPosts(
      featured ? posts.filter(post => post.featuredpost) : posts
    )
  }

>>>>>>> 521fa1481f5cfe9f5ee2996c693150148bcb4690
  return (
    <div>
      {appPosts &&
        appPosts.map(({ node: post }) => (
          <div>
<<<<<<< HEAD
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
=======
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
>>>>>>> 521fa1481f5cfe9f5ee2996c693150148bcb4690
          </div>
        ))}
    </div>
  )
}
