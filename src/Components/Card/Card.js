import React, { Component } from "react";
import AnimatedNumber from "react-animated-number";
import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <img
          src={"/coin-icons/" + this.props.coin.sym + ".svg"}
          height="64"
          width="64"
          alt={this.props.coin.name}
          className="Card-img"
        />
        <div className="Card-container">
          <h4>
            <b>{this.props.coin.name}</b>
          </h4>
          <h2>
            <AnimatedNumber
              style={{
                transition: "2s ease-out",
                transitionProperty: "background-color, color, opacity"
              }}
              frameStyle={perc => (perc === 100 ? {} : { opacity: 0.25 })}
              duration={300}
              stepPrecision={0.01}
              value={this.props.coin.value}
              formatValue={n => (n === Infinity ? "Unavailable" : `$${n}`)}
            />
          </h2>
        </div>
      </div>
    );
  }
}

export default Card;
