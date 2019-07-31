import React, { Component } from "react";

export default class Inbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btcData: props.btcData
    };
  }
  componentDidMount() {}
  render() {
    const walletAddress = localStorage.getItem("btcId");
    return (
      <div>
        <div className="container">
          <div className="jumbotron m-3">
            <h3>Inbox</h3>
            <div className="form-group">
              <label htmlFor="exampleInputWallet">your wallet address</label>
              <input
                readOnly
                value={walletAddress}
                ref="wallet"
                type="text"
                className="form-control "
              />
              <small className="text-muted">
                use this address to receive money from others
              </small>
            </div>
            <hr />
            <form>
              <h3>Your Wallet</h3>
              <div className="form-group">
                <label>Balance in wallet</label>
                <input
                  readOnly
                  value={this.state.btcData.btcBalance}
                  ref="BTbalance"
                  type="number"
                  className="form-control"
                />
              </div>

              <button
                type="submit"
                onClick={e => {
                  e.preventDefault();
                  window.location.reload();
                }}
                className="btn btn-primary btn-lg btn-block"
              >
                Refresh
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
