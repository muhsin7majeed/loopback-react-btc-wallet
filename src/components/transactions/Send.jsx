import React, { Component } from "react";
const axios = require("axios");
export default class Send extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: "",
      nAn: "",
      balanceErrs: "",
      btcData: props.btcData,
      toAddress: null,
      toSend: null
    };
  }

  onAddressChange = e => {
    this.setState({ toAddress: e.target.value });
  };
  onAmountChange = e => {
    if (isNaN(e.target.value)) {
      this.setState({ nAn: "please enter a valid number" });
    } else {
      this.setState({ toSend: e.target.value });
      this.setState({ nAn: "" });
    }
  };
  onSubmit = e => {
    // ID and access token
    const userId = localStorage.getItem("btcId");
    const accessToken = localStorage.getItem("accessToken");

    // balance and amount to send
    const btcBalance = parseFloat(this.state.btcData.btcBalance);
    const amountToSend = parseFloat(this.state.toSend);

    // check if sufficient balance
    console.log("balance : " + btcBalance, "to send : " + amountToSend);
    if (btcBalance < amountToSend) {
      this.setState({ balanceErrs: "in sufficient balance" });
    } else {
      this.setState({ balanceErrs: "" });

      const patchReceiver = `https://loopback-react-btc-wallet.herokuapp.com/api/bitcoinWallets/${
        this.state.toAddress
      }?access_token=${accessToken}`;

      // gets receivers balance
      axios
        .request({
          method: "get",
          url: patchReceiver
        })
        .then(res => {
          this.setState({
            err: ""
          });
          console.log("success");
          const victimBalance = parseFloat(res.data.btcBalance);
          const totalToSend = victimBalance + amountToSend;
          const toSendData = {
            btcBalance: totalToSend
          };
          // updates receivers balance
          axios
            .request({
              method: "patch",
              url: patchReceiver,
              data: toSendData
            })
            .then(res => {
              // user's patch url
              const patchSender = `https://loopback-react-btc-wallet.herokuapp.com/api/bitcoinWallets/${userId}?access_token=${accessToken}`;

              // calculate user's balance // user's balance minus amount to send
              const totalToPatch = btcBalance - amountToSend;
              const balanceData = {
                btcBalance: totalToPatch
              };

              // update user's balance
              axios
                .request({
                  method: "patch",
                  url: patchSender,
                  data: balanceData
                })
                .then(res => {
                  this.setState({
                    success: "everything went well, phew!!."
                  });
                  window.location.reload();
                })
                .catch(err => {
                  this.setState({ err: "something went wrong" });
                  console.log(err);
                });
              this.setState({
                success: "Transaction Success."
              });
            })
            .catch(err => {
              this.setState({ err: "something went wrong" });
              console.log(err);
            });
        })
        .catch(err => {
          this.setState({
            err: "something went wrong, maybe check address again"
          });
          console.log(err);
        });

      console.log("balance : " + (btcBalance - amountToSend));
    }

    e.preventDefault();
  };
  render() {
    return (
      <div className="container">
        <div className="jumbotron m-3">
          <h3>Send Money</h3>
          <div className="form-group">
            <small>Balance in wallet</small>
            <input
              readOnly
              value={this.state.btcData.btcBalance}
              type="number"
              className="form-control"
            />
          </div>
          <hr />
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputWallet">Wallet address</label>
              <input
                value={this.state.toAddress}
                onChange={this.onAddressChange}
                required
                ref="wallet"
                type="text"
                className="form-control"
                id="exampleInputWallet"
                placeholder="Enter wallet address"
              />
              <small className="text-muted">
                enter 24 digit wallet address
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputBTamount">Amout</label>
              <input
                onChange={this.onAmountChange}
                value={this.state.toSend}
                required
                type="number"
                step="0.01"
                className="form-control"
                placeholder="how much you want to send ?"
              />
              <small className="text-danger">{this.state.balanceErrs}</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputBTamount">Message</label>
              <textarea
                type="text"
                className="form-control"
                disabled
                placeholder="as of now this doesn't work :("
              />
            </div>
            <small className="text-success">{this.state.success}</small>
            <small className="text-danger">{this.state.nAn}</small>
            <small className="text-danger">{this.state.errMsg}</small>
            <small className="text-danger">{this.state.err}</small>

            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
}
