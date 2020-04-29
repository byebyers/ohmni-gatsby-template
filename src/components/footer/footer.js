import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import Container from '../container/container'
import './footer.scss'

const Footer = ({ siteTitle }) => {
  return (
    <footer>
      <Container
        size={'large'}
        height={'small'}
      >
        <div className="footer-container">
          <div className="footer-item">
            <Link to="/" className="text-black">
              <img src="/img/logo-title.svg" alt={siteTitle} className="site-logo"/>
            </Link>
          </div>
          <div className="footer-item">
            <h2>Menu</h2>
          </div>
          <div className="footer-item">
            <h2>Address</h2>
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
