import React from 'react'
import PropTypes from 'prop-types'

// Components
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Container from '../components/container/container'
import Halfban from "../components/banners/half-banner"
import Feature from "../components/features/features"
import Content, { HTMLContent } from '../components/content/content'

export const AboutPageTemplate = ({
  heading,
  subheading,
  banner,
  content,
  contentComponent,
  anewsheading,
  anewscontent,
  anewspage,
  anewsthumb,
  ateamheading,
  ateamcontent,
  ateampage,
  ateamthumb,
}) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <Halfban
        heading={heading}
        subheading={subheading}
        banner={banner}
      />
      <Container>
          <PageContent className="content" content={content} />
      </Container>
      <Feature
        image={ateamthumb}
        heading={ateamheading}
        content={ateamcontent}
        direction={'left'}
        link={ateampage}
      />
      <Feature
        image={anewsthumb}
        heading={anewsheading}
        content={anewscontent}
        direction={'right'}
        link={anewspage}
      />
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
        anewsheading={post.frontmatter.aboutNews.heading}
        anewscontent={post.frontmatter.aboutNews.aboutFeatureContent}
        anewspage={post.frontmatter.aboutNews.page}
        anewsthumb={post.frontmatter.aboutNews.featuredImage}
        ateamheading={post.frontmatter.aboutTeam.heading}
        ateamcontent={post.frontmatter.aboutTeam.aboutFeatureContent}
        ateampage={post.frontmatter.aboutTeam.page}
        ateamthumb={post.frontmatter.aboutTeam.featuredImage}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
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
        aboutNews{
          aboutFeatureContent
          heading
          page
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        aboutTeam {
          aboutFeatureContent
          heading
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
  }
`
