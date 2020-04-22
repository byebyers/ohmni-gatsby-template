import React from "react"
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Fullban from "../components/banners/full-banner"
import Onecol from "../components/columns/one-column"
import Feature from "../components/features/features"
import Container from '../components/container/container'
import BlogRoll from '../components/rolls/blog-roll'

export const IndexPageTemplate = ({
  heading,
  subheading,
  banner,
  onecolheadline,
  onecolcontent,
  aboutfeature,
  featureimage,
  sitename,
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
    <Feature
      image={featureimage}
      site={sitename}
      content={aboutfeature}
      direction={'left'}
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
  const { homepage: post } = data
  return (
    <Layout>
      <SEO title="Home" />
      <IndexPageTemplate
        heading={post.frontmatter.heading}
        subheading={post.frontmatter.subheading}
        banner={post.frontmatter.banner}
        onecolheadline={post.frontmatter.onecolheadline}
        onecolcontent={post.frontmatter.onecolcontent}
        aboutfeature={post.frontmatter.aboutFeature.aboutFeatureContent}
        featureimage={post.frontmatter.aboutFeature.image}
        sitename={data.website.siteMetadata.title}
      />
      <Container>
        <h1>Latest Stories</h1>
        <hr />
        <BlogRoll data={data.blogPosts}/>
      </Container>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const homePageQuery = graphql`
  query HomePageTemplate($id: String) {
    website: site {
      siteMetadata {
        title
      }
    }
    homepage: markdownRemark(id: { eq: $id } frontmatter: { templateKey: { eq: "home-page" } }) {
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
        aboutFeature {
          aboutFeatureContent
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    blogPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: 3
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
