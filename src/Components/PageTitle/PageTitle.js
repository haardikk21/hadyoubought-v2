import React, { Component } from "react";
import "./PageTitle.css";

import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";

class PageTitle extends Component {
  render() {
    return (
      <div className="PageTitle">
        <h2>
          HadYouBought $100 on &nbsp;
          <CustomDatePicker
            updateCoins={this.props.updateCoins}
            currentCoins={this.props.currentCoins}
          />
        </h2>
      </div>
    );
  }
}

export default PageTitle;
