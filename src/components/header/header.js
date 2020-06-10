import React from "react"
import PropTypes from "prop-types"

//Components
import { Link } from "gatsby"
import Nav from "../navigation/nav"

//Styles
import "./header.scss"

/* This header is the space at the top of the website
  and includes the nav bar. Site title comes from a page query  */
const Header = ({ siteTitle }) => (
  <header className="main-header">
    <div className="header-container">
      {/*<h1>
        <Link to="/" className="text-black">
          {siteTitle}
        </Link>
      </h1>*/}
      <Link to="/" className="text-black">
        <img src="/img/logo-title.svg" alt={siteTitle} className="site-logo"/>
      </Link>
    </div>
    <Nav type={'nav-flex'} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
