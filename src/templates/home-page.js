import React from "react"
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/banners/banners.scss"

export const IndexPageTemplate = ({
  heading,
  subheading,
  banner,
}) => (
  <section
    style={{
      backgroundImage: `url('${
        !!banner.childImageSharp ? banner.childImageSharp.fluid.src : banner
      }')`
    }}
  className="big-banner display-banner">
    <div className="cover-background">
      <div className="title-wrap">
        <h1>{heading}</h1>
        <p className="big-content">{subheading}</p>
      </div>
    </div>
  </section>
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
      }
    }
  }
`
