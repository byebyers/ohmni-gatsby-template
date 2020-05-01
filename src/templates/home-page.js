import React from "react"
import PropTypes from 'prop-types'

//Components
import { graphql } from 'gatsby'
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

/* Check Netlify Config file for field data */
export const IndexPageTemplate = ({
  heading,
  subheading,
  banner,
  headline,
  body,
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
        headline={headline}
        body={body}
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
  headline: PropTypes.string,
  body: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { homepage: post } = data
  return (
    <Layout>
      <SEO title="Home" />
      <IndexPageTemplate
        heading={post.frontmatter.heading}
        subheading={post.frontmatter.subheading}
        banner={post.frontmatter.image}
        headline={post.frontmatter.headline}
        body={post.frontmatter.body}
        aboutfeature={post.frontmatter.aboutFeature.description}
        featureimage={post.frontmatter.aboutFeature.image}
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

/* This filters the following.
  query = gets page metadata
  homePage = gets fields for home page from CMS
  blogPosts = gets all latest Posts
  webSocial = gets company social media links from CMS
  webPartner = gets all partner logos from CMS */
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        headline
        body
        aboutFeature {
          heading
          description
          page
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
            featured
            image {
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
            image {
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
