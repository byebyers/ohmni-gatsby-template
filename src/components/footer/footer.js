import React from 'react'
import PropTypes from 'prop-types'

//Components
import { Link } from "gatsby"
import Container from '../container/container'
import Nav from '../navigation/nav'

//Styles
import './footer.scss'

/* This footer is the space at the bottom of the website
  and includes a site meny and company address. Site title comes from a page query  */
const Footer = ({ siteTitle, address }) => {
  return (
    <footer>
      <Container
        size={'large'}
        height={'small'}
      >
        <div className="footer-container">
          <div className="footer-item footer-logo">
            <Link to="/" className="text-black">
              <img src="/img/logo-title.svg" alt={siteTitle} className="site-logo"/>
            </Link>
          </div>
          <div className="footer-item">
            <h2>Menu</h2>
            <Nav type={'nav-block'} />
          </div>
          <div className="footer-item">
            <h2>Address</h2>
            <div className="address-block">
              {address}
            </div>
          </div>
        </div>
      </Container>
      <div className="copyRight">
        © {new Date().getFullYear()},
        {` `}
        {siteTitle}
      </div>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

export default Footer
