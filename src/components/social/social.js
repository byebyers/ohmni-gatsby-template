import React from "react"
import PropTypes from 'prop-types'
import './social.scss'

const Social = ({
  facebook,
  instagram,
  linkedin,
  twitter,
}) => {
  return (
    <div className="oh-social">
      <section className="social-container">
        <h1>Follow Us</h1>
        <div className="social-icons">
        {facebook ? (
          <div className="socialItem"><a href={facebook} target="_blank" rel="noopener noreferrer"><img src="/img/facebook.svg" alt="Facebook icon and link"/><span className="text-black">Facebook</span></a></div>
        ) : null}
        {instagram ? (
          <div className="socialItem"><a href={instagram} target="_blank" rel="noopener noreferrer"><img src="/img/instagram.svg" alt="Instagram icon and link"/><span className="text-black">Instagram</span></a></div>
        ) : null}
        {linkedin ? (
          <div className="socialItem"><a href={linkedin} target="_blank" rel="noopener noreferrer"><img src="/img/linkedin.svg" alt="Linkedin icon and link"/><span className="text-black">LinkedIn</span></a></div>
        ) : null}
        {twitter ? (
          <div className="socialItem"><a href={twitter} target="_blank" rel="noopener noreferrer"><img src="/img/twitter.svg" alt="Twitter icon and link"/><span className="text-black">Twitter</span></a></div>
        ) : null}
        </div>
      </section>
    </div>
  )
}

Social.propTypes = {
  facebook: PropTypes.string,
}

export default Social
