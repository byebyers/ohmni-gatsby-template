import React from "react"
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Fullban from "../components/banners/full-banner"

export const IndexPageTemplate = ({
  heading,
  subheading,
  banner,
}) => (
  <Fullban
    heading={heading}
    subheading={subheading}
    banner={banner}
  />
)

IndexPageTemplate.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  banner: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const IndexPage = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(post.frontmatter.banner)
  return (
    <Layout>
      <SEO title="Home" />
      <IndexPageTemplate
        heading={post.frontmatter.heading}
        subheading={post.frontmatter.subheading}
        banner={post.frontmatter.banner}
      />
    </Layout>
  )
}

export default IndexPage

export const homePageQuery = graphql`
  query HomePage($id: String) {
    markdownRemark(id: { eq: $id } frontmatter: { templateKey: { eq: "index-page" } }) {
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
