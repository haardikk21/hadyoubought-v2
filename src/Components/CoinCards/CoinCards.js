import React, { Component } from "react";
import Card from "../Card/Card";
import "./CoinCards.css";

class CoinCards extends Component {
  render() {
    return (
      <div className="CoinCards">
        {this.props.coins.map(x => (
          <Card coin={x} key={x.sym} />
        ))}
      </div>
    );
  }
}

export default CoinCards;
