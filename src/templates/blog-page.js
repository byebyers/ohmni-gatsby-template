import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Halfban from '../components/banners/half-banner'
import BlogRoll from '../components/blog-roll/blog-roll'

export const BlogPageTemplate = ({
  heading,
  subheading,
  banner,
}) => {

  return (
    <div>
      <Halfban
        heading={heading}
        subheading={subheading}
        banner={banner}
      />
      <BlogRoll />
    </div>
  )
}

BlogPageTemplate.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  banner: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const BlogPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPageTemplate
        heading={post.frontmatter.heading}
        subheading={post.frontmatter.subheading}
        banner={post.frontmatter.banner}
      />
    </Layout>
  )
}

BlogPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogPage

export const blogPageQuery = graphql`
  query BlogPageTemplate($id: String) {
    markdownRemark(id: { eq: $id } frontmatter: { templateKey: { eq: "about-page" } }) {
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
  }
`
