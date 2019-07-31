import React, { Component } from "react";
const axios = require("axios");
export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      err: "",
      success: "",
      nAn: "",
      isHome: false,
      amountToUpdate: null,
      btcBalance: null
    };
  }
  componentWillMount() {
    const accessToken = localStorage.getItem("accessToken");
    const userID = localStorage.getItem("userID");
    const findByApi = `https://loopback-react-btc-wallet.herokuapp.com/api/bitcoinWallets/findOne?filter[where][btcUserID]=${userID}&access_token=${accessToken}
`;
    axios
      .request({
        method: "get",
        url: findByApi
      })
      .then(res => {
        this.setState({
          btcBalance: res.data.btcBalance
        });
      })
      .catch(err => console.log(err));
  }
  onChange = e => {
    if (isNaN(e.target.value)) {
      this.setState({ nAn: "please enter a valid number" });
    } else {
      this.setState({ amountToUpdate: e.target.value });
      this.setState({ nAn: "" });
    }
  };
  onSubmit = e => {
    const id = localStorage.getItem("btcId");
    const accessToken = localStorage.getItem("accessToken");

    const btcBalance = parseFloat(this.state.btcBalance);
    const amountToUpdateTest = parseFloat(this.state.amountToUpdate);
    const total = btcBalance + amountToUpdateTest;
    const amountToUpdate = {
      btcBalance: total
    };

    const apiPatch = `https://loopback-react-btc-wallet.herokuapp.com/api/bitcoinWallets/${id}?access_token=${accessToken}`;

    axios
      .request({
        method: "patch",
        url: apiPatch,
        data: amountToUpdate
      })
      .then(res => {
        this.setState({
          success: "Money added to your account."
        });

        window.location.reload();
      })
      .catch(err => {
        this.setState({ err: "something went wrong" });
        console.log(err);
      });

    e.preventDefault();
  };
  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="container">
          <div className="text-muted text-center p-3 m-3">
            <h4>DO NOT USE YOUR CARD DETAILS</h4>
            <p>
              Since it is just for learning, it doesn't validate card details
              and it deffinetly is not secure. So I'll add some random card
              details for you :)
            </p>
          </div>
          <div className="jumbotron m-3">
            <h3 className="mb-3">Add Money</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Name on Card</label>
                <input
                  type="text"
                  value="Harry Potter"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Card Number</label>
                <input
                  type="text"
                  className="form-control"
                  value="1234-5678-9009-8765"
                />
              </div>
              <div className="row ml-0">
                <div className="form-group ">
                  <div className="md-2 ">
                    <label>Expiration Date</label>
                    <input
                      type="text"
                      value="12 / 34"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-group ">
                  <div className="md-2">
                    <label>cvv</label>
                    <input value="123" type="number" className="form-control" />
                  </div>
                </div>
              </div>
              <hr className="mb-4" />
              <div className="form-group">
                <label>Amount</label>
                <input
                  required
                  onChange={this.onChange}
                  value={this.state.amountToUpdate}
                  type="text"
                  placeholder="how much you want to add ?"
                  className="form-control"
                />
                <small className="text-danger">{this.state.nAn}</small>
              </div>
              <button
                className="btn btn-primary btn-lg btn-block"
                type="submit"
              >
                Add to Wallet
              </button>
              <small className="text-success">{this.state.success}</small>
              <small className="text-danger">{this.state.err}</small>
              <small className="text-danger">{this.state.errMsg}</small>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
