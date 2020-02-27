import React from "react"
import { Link } from "gatsby"
import "./nav.scss"


const Nav = () => (
  <div className="nav-container">
    <ul>
      <li><Link to="/" className="links">Home</Link></li>
      <li><Link to="/about/" className="links">About</Link></li>
      <li><Link to="/blog/" className="links">Blog</Link></li>
    </ul>
  </div>
)

export default Nav
