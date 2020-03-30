import React from "react"
import { Link } from "gatsby"
import "./nav.scss"


const Nav = () => (
  <div className="nav-container">
    <ul>
      <li><Link to="/" className="text-white">Home</Link></li>
      <li><Link to="/about/" className="text-white">About</Link></li>
      <li><Link to="/blog/" className="text-white">Blog</Link></li>
    </ul>
  </div>
)

export default Nav
