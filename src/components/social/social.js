import React from "react"
import PropTypes from 'prop-types'
import './social.scss'

const Social = ({
  facebook,
  instagram,
  linkedin,
  twitter,
  inWebsite,
  inMail,
}) => {
  return (
    <div className="socialMedia">
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
      {inWebsite ? (
        <div className="socialItem"><a href={inWebsite} target="_blank" rel="noopener noreferrer"><img src="/img/link.svg" alt="Author's website icon and link"/><span className="text-black">Website</span></a></div>
      ) : null}
      {inMail ? (
        <div className="socialItem"><a href={`mailto:` + inMail} target="_blank" rel="noopener noreferrer"><img src="/img/mail.svg" alt="Author's email icon and link"/><span className="text-black">{inMail}</span></a></div>
      ) : null}
    </div>
  )
}

Social.propTypes = {
  facebook: PropTypes.string,
}

export default Social
