import React from "react"
import PropTypes from "prop-types"

//Components
import { useStaticQuery, graphql } from "gatsby"
import Header from "../header/header"
import Footer from "../footer/footer"

//Styles
import '../../global.scss'
import './layout.scss'

/* General layout of all pages.
    Uses a static query to get site metadata and title.
    Children is all parts and data passed from pages. */
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
      {/* o-lines are the fancy lines overlayed on the site. */}
      <div className="o-lines o-layout">
        <div className="o-lines_line o-layout_item o-first"></div>
        <div className="o-lines_line o-layout_item"></div>
        <div className="o-lines_line o-layout_item"></div>
      </div>
      <div className="main-content">
        {children}
      </div>
      <Footer
        siteTitle={data.site.siteMetadata.title}
      />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
