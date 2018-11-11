import React, { Component } from 'react';
import Websocket from 'react-websocket';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        ticker: "ETHBTC",
        price: 0
      };
    }

  handleData(data) {
    let result = JSON.parse(data);
    this.setState({price: result.p});
  }
  render() {
    return (
      <div className="container">
        <div id="app">
          <div className="center border">
            <span className="text">{this.state.price}</span>
          </div>
          <div className="text center">
          {this.state.ticker}
          </div>
          <Websocket url={`wss://stream.binance.com:9443/ws/${this.state.ticker.toLowerCase()}@aggTrade`}
                        onMessage={this.handleData.bind(this)} debug={true}/>
        </div>
      </div>
    );
  }
}

export default App;
