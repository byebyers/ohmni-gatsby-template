import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import AuthorSection from '../components/author-section/author-section'
import Container from '../components/container/container'
import BlogRoll from '../components/rolls/blog-roll'

export const AuthorPageTemplate = ({
  title,
  description,
  thumbnail,
}) => {
  return (
    <AuthorSection
      author={title}
      desc={description}
      thumb={thumbnail}
    />
  )
}

AuthorPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  thumbnail: PropTypes.string,
}

const AuthorPage = ({ data }) => {
  const { authorPage: owner } = data
  return (
    <Layout>
      <Container>
        <AuthorPageTemplate
          title={owner.frontmatter.title}
          description={owner.frontmatter.description}
          thumbnail={owner.frontmatter.thumbnail}
        />
        <hr />
        <BlogRoll data={data.authorPosts} />
      </Container>
    </Layout>
  )
}

AuthorPage.propTypes = {
  pageContext: PropTypes.shape({
    author: PropTypes.string.isRequired,
  }),
  data: PropTypes.object.isRequired,
}

export default AuthorPage

export const query = graphql`
  query AuthorPage($id: String!, $title: String) {
    authorPage: markdownRemark(id: { eq: $id } frontmatter: { templateKey: { eq: "author-page" } }) {
      html
      frontmatter {
        title
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
