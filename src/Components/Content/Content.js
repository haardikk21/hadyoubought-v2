import React, { Component } from 'react';
import PageTitle from '../PageTitle/PageTitle';
import CoinCards from '../CoinCards/CoinCards';
import './Content.css';

class Content extends Component {
	render() {
		return (
			<div className="Content">
				<PageTitle />
				<CoinCards coins={this.props.coins} />
			</div>
		);
	}
}

export default Content;
