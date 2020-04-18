import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Container from '../components/container/container'
import Halfban from '../components/banners/half-banner'
import BlogRoll from '../components/rolls/blog-roll'
import FeaturedPost from '../components/featured-post/featured-post'

export const BlogPageTemplate = ({
  heading,
  subheading,
  banner,
  postData,
}) => {

  return (
    <div>
      <Halfban
        heading={heading}
        subheading={subheading}
        banner={banner}
      />
    </div>
  )
}

BlogPageTemplate.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  banner: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const BlogPage = ({ data }) => {
  const { blogPage: post } = data

  return (
    <Layout>
      <BlogPageTemplate
        heading={post.frontmatter.heading}
        subheading={post.frontmatter.subheading}
        banner={post.frontmatter.banner}
      />
      <Container>
        <FeaturedPost data={data.blogPosts}/>
        <h1>Latest</h1>
        <hr />
        <BlogRoll data={data.blogPosts}/>
      </Container>
    </Layout>
  )
}

BlogPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogPage

export const blogPageQuery = graphql`
  query BlogPageTemplate($id: String) {
    blogPage: markdownRemark(id: { eq: $id } frontmatter: { templateKey: { eq: "blog-page" } }) {
      html
      frontmatter {
        heading
        subheading
        banner {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    blogPosts: allMarkdownRemark(
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
            category
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
`
