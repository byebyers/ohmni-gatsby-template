/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import '../../global.scss'
import './layout.scss'
import Header from "../header/header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="site-layout">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="o-lines o-layout">
        <div className="o-lines_line o-layout_item o-first"></div>
        <div className="o-lines_line o-layout_item"></div>
        <div className="o-lines_line o-layout_item"></div>
      </div>
      {children}
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
