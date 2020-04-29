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
import Social from '../components/social/social'
import Partners from '../components/partners/partners'
import DisContainer from '../components/container/dis-container'

export const IndexPageTemplate = ({
  heading,
  subheading,
  banner,
  onecolheadline,
  onecolcontent,
  aboutfeature,
  featureimage,
  featureheading,
  facebook,
  featurelink,
}) => (
  <div>
    <Fullban
      heading={heading}
      subheading={subheading}
      banner={banner}
    />
    <Container size={'regular'}>
      <Onecol
        onecolheadline={onecolheadline}
        onecolcontent={onecolcontent}
      />
    </Container>
    <Container size={'large'}>
      <Feature
        image={featureimage}
        heading={featureheading}
        content={aboutfeature}
        direction={'left'}
        link={featurelink}
      />
    </Container>
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
        featureimage={post.frontmatter.aboutFeature.featuredImage}
        featureheading={post.frontmatter.aboutFeature.heading}
        featurelink={post.frontmatter.aboutFeature.page}
      />
      <Container size={'regular'}>
        <h1>Latest Stories</h1>
        <hr />
        <BlogRoll
          data={data.blogPosts}
        />
      </Container>
      <Container size={'large'}>
        <DisContainer>
          <h1>Follow Us</h1>
          <Social
            facebook={data.webSocial.frontmatter.facebook}
            instagram={data.webSocial.frontmatter.instagram}
            linkedin={data.webSocial.frontmatter.linkedin}
            twitter={data.webSocial.frontmatter.twitter}
          />
        </DisContainer>
      </Container >
      <Container size={'large'}>
        <DisContainer>
          <h1>Partnered with</h1>
          <Partners
            data={data.webPartner}
          />
        </DisContainer>
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
          heading
          aboutFeatureContent
          page
          featuredImage {
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
    webSocial: markdownRemark(
      frontmatter: { templateKey: { eq: "info-page" } }
    ) {
      id
      frontmatter {
        facebook
        instagram
        linkedin
        twitter
      }
    }
    webPartner: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "partner-page" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            thumbnail {
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
