import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
	render() {
		return (
			<div className="Card">
				<img
					src={'/coin-icons/' + this.props.coin.sym + '.svg'}
					height="64"
					width="64"
					alt={this.props.coin.name}
					className="Card-img"
				/>
				<div className="Card-container">
					<h4>
						<b>{this.props.coin.name}</b>
					</h4>
					<p>$1,000,000</p>
				</div>
			</div>
		);
	}
}

export default Card;