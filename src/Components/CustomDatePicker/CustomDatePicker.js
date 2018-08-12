import React, { Component } from "react";
import rp from "request-promise-native";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CustomDatePicker.css";

const dingAudio = new Audio("ding.mp3");
dingAudio.load();

class CustomDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleCalendar = this.toggleCalendar.bind(this);
  }

  async handleChange(date) {
    this.setState({
      startDate: moment(date)
    });
    this.toggleCalendar();

    const today = moment();
    const oldDate = moment(date);
    if (oldDate.isBefore(today)) {
      let delay = time => result =>
        new Promise(resolve => setTimeout(() => resolve(result), time));
      let newCoins = this.props.currentCoins;
      for (let i = 0; i < this.props.currentCoins.length; i++) {
        let coin = this.props.currentCoins[i];
        let todayPriceUrl = `https://min-api.cryptocompare.com/data/pricehistorical?fsym=${coin.sym.toUpperCase()}&tsyms=USD&ts=${today.format(
          "X"
        )}`;
        let oldPriceUrl = `https://min-api.cryptocompare.com/data/pricehistorical?fsym=${coin.sym.toUpperCase()}&tsyms=USD&ts=${oldDate.format(
          "X"
        )}`;
        let todayPriceJson = await rp(todayPriceUrl);
        await delay(75);
        let oldPriceJson = await rp(oldPriceUrl);

        let todayPrice = JSON.parse(todayPriceJson)[coin.sym.toUpperCase()][
          "USD"
        ];

        let oldPrice = JSON.parse(oldPriceJson)[coin.sym.toUpperCase()]["USD"];
        let bitcoinAmountThen = 100 / oldPrice;
        let usdToday =
          Math.round(parseFloat(todayPrice * bitcoinAmountThen) * 100) / 100;
        let _newCoin = {
          sym: coin.sym,
          name: coin.name,
          value: usdToday
        };
        let coinIdx = newCoins.findIndex(_coin => _coin.sym === coin.sym);
        newCoins[coinIdx] = _newCoin;
        this.props.updateCoins(newCoins);
        dingAudio.currentTime = 0;
        dingAudio.play();
      }
    }
  }

  toggleCalendar(e) {
    e && e.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div className="CustomDatePicker">
        <label onClick={this.toggleCalendar}>
          {this.state.startDate.format("DD-MM-YYYY")}
        </label>
        {this.state.isOpen && (
          <DatePicker
            customInput={<CustomDatePicker />}
            selected={this.state.startDate}
            onChange={this.handleChange}
            maxDate={moment()}
            withPortal
            inline
          />
        )}
      </div>
    );
  }
}

export default CustomDatePicker;
