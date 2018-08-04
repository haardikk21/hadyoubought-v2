import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
	render() {
		return (
			<div className="Footer">
				<h1 className="Footer-text">
					<a href={this.props.github_link}>Fork me on Github!</a>
					<br />
					Made with {'<3'} for strong HODL!
				</h1>
			</div>
		);
	}
}

export default Footer;
