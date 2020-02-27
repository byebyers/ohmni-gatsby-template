import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Fullban from "../components/banners/full-banner"

const IndexPage = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <SEO title="Home" />
      <Fullban
        heading={post.frontmatter.heading}
        subheading={post.frontmatter.subheading}
      />
      <Link to="/about/">About Page</Link>
    </Layout>
  )
}

export default IndexPage

export const homePageQuery = graphql`
  query HomePage($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        heading
        subheading
      }
    }
  }
`
