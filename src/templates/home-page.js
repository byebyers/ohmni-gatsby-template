import React from "react"
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Fullban from "../components/banners/full-banner"
import Onecol from "../components/columns/one-column"

export const IndexPageTemplate = ({
  heading,
  subheading,
  banner,
  onecolheadline,
  onecolcontent,
}) => (
  <div>
    <Fullban
      heading={heading}
      subheading={subheading}
      banner={banner}
    />
    <Onecol
      onecolheadline={onecolheadline}
      onecolcontent={onecolcontent}
    />
  </div>
)

IndexPageTemplate.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  banner: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  onecolheadline: PropTypes.string,
  onecolcontent: PropTypes.string,
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
        onecolheadline={post.frontmatter.onecolheadline}
        onecolcontent={post.frontmatter.onecolcontent}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const homePageQuery = graphql`
  query HomePageTemplate($id: String) {
    markdownRemark(id: { eq: $id } frontmatter: { templateKey: { eq: "home-page" } }) {
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
        onecolheadline
        onecolcontent
      }
    }
  }
`
