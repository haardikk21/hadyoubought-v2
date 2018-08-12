import React, { Component } from "react";
import WarningHeader from "./Components/WarningHeader/WarningHeader";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import "./App.css";

const coinsInfo = [
  {
    sym: "btc",
    name: "Bitcoin",
    value: 100
  },
  {
    sym: "eth",
    name: "Ethereum",
    value: 100
  },
  {
    sym: "ltc",
    name: "Litecoin",
    value: 100
  },
  {
    sym: "xrp",
    name: "Ripple",
    value: 100
  },
  {
    sym: "neo",
    name: "NEO",
    value: 100
  },
  {
    sym: "eos",
    name: "EOS",
    value: 100
  },
  {
    sym: "ada",
    name: "Cardano",
    value: 100
  },
  {
    sym: "aion",
    name: "AION Network",
    value: 100
  },
  {
    sym: "bat",
    name: "Basic Attention Token",
    value: 100
  },
  {
    sym: "bch",
    name: "Bitcoin Cash",
    value: 100
  },
  {
    sym: "ark",
    name: "ARK",
    value: 100
  },
  {
    sym: "bcn",
    name: "Bytecoin",
    value: 100
  },
  {
    sym: "blk",
    name: "BlackCoin",
    value: 100
  },
  {
    sym: "bnb",
    name: "Binance Coin",
    value: 100
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <WarningHeader message="FOMO is bad, FUD is worse. Still, invest responsibly" />
        <Content currentCoins={coinsInfo} />
        <Footer github_link="https://github.com/haardikk21/hadyoubought-v2" />
      </div>
    );
  }
}

export default App;
