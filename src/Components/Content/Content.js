import React, { Component } from "react";
import PageTitle from "../PageTitle/PageTitle";
import CoinCards from "../CoinCards/CoinCards";
import "./Content.css";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCoins: this.props.currentCoins
    };
    this.updateCoins = this.updateCoins.bind(this);
  }

  updateCoins(currentCoins) {
    this.setState({
      currentCoins: currentCoins
    });
  }

  render() {
    return (
      <div className="Content">
        <PageTitle
          updateCoins={this.updateCoins}
          currentCoins={this.state.currentCoins}
        />
        <CoinCards coins={this.state.currentCoins} />
      </div>
    );
  }
}

export default Content;
