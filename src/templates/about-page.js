import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Halfban from "../components/banners/half-banner"
import Content, { HTMLContent } from '../components/content/content'


export const AboutPageTemplate = ({
  heading,
  subheading,
  banner,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <Halfban
        heading={heading}
        subheading={subheading}
        banner={banner}
      />
      <PageContent className="content" content={content} />
    </div>
  )
}

AboutPageTemplate.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  banner: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.string,
  contentComponent: PropTypes.func
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        heading={post.frontmatter.heading}
        subheading={post.frontmatter.subheading}
        banner={post.frontmatter.banner}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const homePageQuery = graphql`
  query AboutPageTemplate($id: String) {
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
