/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

//Components
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

/* Queries meta data from gatsby-config.js */
function SEO({ description, lang, meta, title, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
            author
            organization {
              name
              url
              logo
            }
            social {
              twitter
              fbAppID
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description;


  return (
    <Helmet
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    >
      <html lang={lang} />
      <title>{title}</title>
      <meta content={metaDescription} name="description" />
      <meta content={title} name="og:title" />
      <meta content={metaDescription} name="og:description" />
      <meta content="website" name="og:type" />
      <meta content={image} property="og:image" />
      <meta content="twitter:card" name="summary" />
      <meta content={title} name="twitter:title" />
      <meta content={image} name="twitter:image" />
      <meta content={metaDescription} name="twitter:description" />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
