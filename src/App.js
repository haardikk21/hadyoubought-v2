import React, { Component } from 'react';
import WarningHeader from './Components/WarningHeader/WarningHeader';
import CoinCards from './Components/CoinCards/CoinCards';
import Footer from './Components/Footer/Footer';
import './App.css';

const coinsInfo = [
	{
		sym: 'btc',
		name: 'Bitcoin'
	},
	{
		sym: 'eth',
		name: 'Ethereum'
	},
	{
		sym: 'ltc',
		name: 'Litecoin'
	},
	{
		sym: 'xrp',
		name: 'Ripple'
	},
	{
		sym: 'neo',
		name: 'NEO'
	},
	{
		sym: 'eos',
		name: 'EOS'
	},
	{
		sym: 'ada',
		name: 'Cardano'
	},
	{
		sym: 'aion',
		name: 'AION Network'
	},
	{
		sym: 'bat',
		name: 'Basic Attention Token'
	},
	{
		sym: 'bch',
		name: 'Bitcoin Cash'
	},
	{
		sym: 'ark',
		name: 'ARK'
	},
	{
		sym: 'bcn',
		name: 'Bytecoin'
	},
	{
		sym: 'blk',
		name: 'BlackCoin'
	},
	{
		sym: 'bnb',
		name: 'Binance Coin'
	}
];

class App extends Component {
	render() {
		return (
			<div className="App">
				<WarningHeader message="FOMO is bad, FUD is worse. Still, invest responsibly" />
				<CoinCards coins={coinsInfo} />
				<Footer github_link="https://github.com/haardikk21/hadyoubought-v2" />
			</div>
		);
	}
}

export default App;
