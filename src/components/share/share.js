import React from 'react'
import PropTypes from 'prop-types'
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
} from 'react-share'

import './share.scss'

const Share = ({ socialConfig, tags }) => (
	<div className="article-share">
    <h4 className="article-title">Share</h4>
		<FacebookShareButton url={socialConfig.config.url} className="button is-outlined is-rounded facebook" >
			<span className="icon">
				<img src="/img/facebook.svg" alt="Facebook icon and link"/>
			</span>
		</FacebookShareButton>
		<TwitterShareButton url={socialConfig.config.url} className="button is-outlined is-rounded twitter" title={socialConfig.config.title} hashtags={tags} >
			<span className="icon">
				<img src="/img/twitter.svg" alt="Twitter icon and link"/>
			</span>
		</TwitterShareButton>
		<LinkedinShareButton url={socialConfig.config.url} className="button is-outlined is-rounded linkedin" title={socialConfig.config.title} >
			<span className="icon">
				<img src="/img/linkedin.svg" alt="Linkedin icon and link"/>
			</span>
		</LinkedinShareButton>
	</div>
);

Share.propTypes = {
	socialConfig: PropTypes.shape({
		config: PropTypes.shape({
			url: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
		}),
	}).isRequired,
	tags: PropTypes.arrayOf(PropTypes.string),
};
Share.defaultProps = {
	tags: [],
};

export default Share;
