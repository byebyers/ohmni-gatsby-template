import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.scss"
import Nav from "../navigation/nav"

const Header = ({ siteTitle }) => (
  <header className="main-header">
    <div className="header-container">
      <h1>
        <Link to="/" className="text-black">
          {siteTitle}
        </Link>
      </h1>
    </div>
    <Nav />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
