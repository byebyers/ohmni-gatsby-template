import React from 'react'
import PropTypes from 'prop-types'

// Components
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import AuthorSection from '../components/author-section/author-section'
import Container from '../components/container/container'
import BlogRoll from '../components/rolls/blog-roll'

export const AuthorPageTemplate = ({
  title,
  description,
  thumbnail,
  facebook,
  instagram,
  linkedin,
  twitter,
  inWebsite,
  inMail
}) => {
  return (
    <div>
      <AuthorSection
        author={title}
        desc={description}
        thumb={thumbnail}
        facebook={facebook}
        instagram={instagram}
        linkedin={linkedin}
        twitter={twitter}
        inWebsite={inWebsite}
        inMail={inMail}
      />
    </div>
  )
}

AuthorPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  thumbnail: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  facebook: PropTypes.string,
  instagram: PropTypes.string,
  linkedin: PropTypes.string,
  twitter: PropTypes.string,
  inWebsite: PropTypes.string,
  inMail: PropTypes.string,
}

const AuthorPage = ({ data }) => {
  const { authorPage: owner} = data
  return (
    <Layout>
      <Container>
        <AuthorPageTemplate
          title={owner.frontmatter.title}
          description={owner.frontmatter.description}
          thumbnail={owner.frontmatter.thumbnail}
          facebook={owner.frontmatter.facebook}
          instagram={owner.frontmatter.instagram}
          linkedin={owner.frontmatter.linkedin}
          twitter={owner.frontmatter.twitter}
          inWebsite={owner.frontmatter.inWebsite}
          inMail={owner.frontmatter.inMail}
        />
        <hr />
        <BlogRoll data={data.authorPosts} />
      </Container>
    </Layout>
  )
}

AuthorPage.propTypes = {
  pageContext: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
  data: PropTypes.object,
}

export default AuthorPage

export const query = graphql`
  query AuthorPage($id: String!, $title: String) {
    authorPage: markdownRemark(id: { eq: $id } frontmatter: { templateKey: { eq: "author-page" } }) {
      html
      frontmatter {
        title
        facebook
        instagram
        linkedin
        twitter
        inWebsite
        inMail
        description
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    authorPosts: allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {frontmatter: {templateKey: {eq: "blog-post"}, author: { in: [$title] }}}
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 400)
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            templateKey
            author
            category
            date(formatString: "MMMM DD, YYYY")
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
