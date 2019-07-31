import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Send from "../transactions/Send";
import Inbox from "../transactions/Inbox";
import "../Navbar/Navbar";
import { Link } from "react-router-dom";
import Add from "../transactions/Add";

const axios = require("axios");

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btcData: "",
      access_token: "",
      currentWindow: "",
      which: "inbox",
      isLogged: false,
      showData: "none",
      errMsg: ""
    };
  }
  componentWillMount() {
    const isLogged = localStorage.getItem("isLogged");
    if (isLogged === "true") {
      this.setState({
        isLogged: true,
        showData: "block",
        showWarning: "none"
      });
    } else {
      this.setState({
        errMsg: "You Are Not Logged In",
        showWarning: "block"
      });
    }
  }
  componentDidMount() {
    const access_token = this.props.location.search.replace(
      "?access_token=",
      ""
    );
    const userID = localStorage.getItem("userID");
    const findByApi = `https://loopback-react-btc-wallet.herokuapp.com/api/bitcoinWallets/findOne?filter[where][btcUserID]=${userID}&access_token=${access_token}
`;
    axios
      .request({
        method: "get",
        url: findByApi
      })
      .then(res => {
        localStorage.setItem("btcId", res.data.id);
        this.setState({ btcData: res.data });
        this.setState({
          currentWindow: <Send btcData={this.state.btcData} />
        });
      })
      .catch(err => console.log(err));
  }
  componentWillUnmount() {}

  handleInbox = () => {
    this.setState({
      currentWindow: <Inbox btcData={this.state.btcData} />,
      which: "send"
    });
  };
  handleSend = () => {
    this.setState({
      currentWindow: <Send btcData={this.state.btcData} />,
      which: "inbox"
    });
  };
  handleAdd = () => {
    this.setState({
      currentWindow: <Add btcData={this.state.btcData} />,
      which: "add"
    });
  };

  render() {
    const access_token = this.props.location.search.replace(
      "?access_token=",
      ""
    );
    const sendBorder = this.state.which === "inbox" ? "borderBottom" : "";
    const inboxBorder = this.state.which === "send" ? "borderBottom" : "";
    const addBorder = this.state.which === "add" ? "borderBottom" : "";
    return (
      <div>
        <div style={{ display: this.state.showWarning }}>
          <h2 className="text-danger">{this.state.errMsg}</h2>
          <Link to="/signup" className="btn btn-success m-1">
            Sign In
          </Link>
          <Link to="/login" className="btn btn-primary m-1">
            LogIn
          </Link>
        </div>
        <div style={{ display: this.state.showData }}>
          <Navbar access_token={access_token} handleInbox={this.handleInbox} />
          <div className="navControls bg-light">
            <div
              onLoad={this.handleSend}
              onClick={this.handleSend}
              className={sendBorder}
            >
              <i className="fa fa-paper-plane" />
            </div>
            <div onClick={this.handleInbox} className={inboxBorder}>
              <i className="fa fa-inbox" />
            </div>
            <div onClick={this.handleAdd} className={addBorder}>
              <i className="fa fa-plus" />
            </div>
          </div>
          <div>{this.state.currentWindow}</div>
        </div>
      </div>
    );
  }
}
