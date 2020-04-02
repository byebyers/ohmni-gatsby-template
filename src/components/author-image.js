import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'


const AuthorImage = ({ imgName }) => (
  <StaticQuery
    query={graphql`
        query {
          markdownRemark(frontmatter: {title: {eq: "originalName"}}) {
            frontmatter {
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
      `}
      render={data => {
        const image = data.markdownRemark.frontmatter.find(
          frontmatter => frontmatter.title.eq.originalName === imgName
        )
        if (!image) {
          return null
        }
        return <Img fluid={image.node.fluid} />
      }}
  />
)

export default AuthorImage
