import React from "react"

//Components
import { Link } from "gatsby"

//Styles
import "./nav.scss"

const Nav = () => (
  <div className="nav-container">
    <ul>
      <li><Link to="/" className="text-black">Home</Link></li>
      <li><Link to="/about/" className="text-black">About</Link></li>
      <li><Link to="/news/" className="text-black">News</Link></li>
    </ul>
  </div>
)

export default Nav
