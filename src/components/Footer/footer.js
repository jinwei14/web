import React from "react";
import PropTypes from "prop-types";

const Footer = ({ footerClass }) => (
	<div className={`defaultFooter ${footerClass}`}>
		<p>
			View site source on{" "}
			<a
				href="https://github.com/jinwei14/jinwei14.github.io"
				target="_blank"
				rel="noreferrer"
			>
				Github
			</a>{" "}
			| Origin Designer{" "}
			<a
				href="https://www.behance.net/ntshgdwn3596"
				target="_blank"
				rel="noreferrer"
			>
				Natasha
			</a>
		</p>
	</div>
);
Footer.propTypes = {
	footerClass: PropTypes.string,
};
export default Footer;
