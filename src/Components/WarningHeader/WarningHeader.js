import React, { Component } from 'react';
import './WarningHeader.css';

class WarningHeader extends Component {
	render() {
		return (
			<div className="WarningHeader">
				<h1 className="WarningHeader-text">{this.props.message}</h1>
			</div>
		);
	}
}

export default WarningHeader;
