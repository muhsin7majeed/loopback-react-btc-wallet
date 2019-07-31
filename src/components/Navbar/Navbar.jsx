import React, { Component } from "react";
import "./Navbar.css";
import { Redirect } from "react-router-dom";
import UserPng from "../../assets/user.png";
const axios = require("axios");

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btcData: "",
      userEmail: localStorage.getItem("userEmail"),
      logout: false,
      access_token: props.access_token,
      isNavOpen: false
    };
  }
  componentDidMount() {
    const access_token = this.state.access_token;
    const userID = localStorage.getItem("userID");
    const findByApi = `http://localhost:3000/api/bitcoinWallets/findOne?filter[where][btcUserID]=${userID}&access_token=${access_token}
`;
    axios
      .request({
        method: "get",
        url: findByApi
      })
      .then(res => {
        this.setState({ btcData: res.data });
      })
      .catch(err => console.log(err));
  }
  handleNavbar = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  };
  handleLogout = () => {
    axios
      .request({
        method: "post",
        url: `https://loopback-react-btc-wallet.herokuapp.com/api/Users/logout?access_token=${
          this.state.access_token
        }`
      })
      .then(res => {
        console.log("logged out");
        this.setState({
          logout: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  renderLogout = () => {
    if (this.state.logout) {
      localStorage.clear();
      return <Redirect to="/" />;
    }
  };
  render() {
    const { name, email, btcBalance, userName } = this.state.btcData;
    const left = this.state.isNavOpen ? "0" : "-100%";
    return (
      <div>
        <div>
          {this.renderLogout()}
          <div className="navBar bg-dark">
            <div className="bars">
              <i onClick={this.handleNavbar} className="fa fa-bars" />
            </div>
            <div className="rightNav" onClick={this.props.handleInbox}>
              <span>
                <i className="mr-1 fa fa-user" />
                {name}
                <br />

                <small className="badge badge-secondary ">
                  <i className="mr-2 fas fa-rupee-sign" />
                  {btcBalance}
                </small>
              </span>
            </div>
          </div>

          <div className="sideBar text-center" style={{ left: left }}>
            <div className="text-center">
              <img src={UserPng} className="rounded-circle m-3" alt="..." />
            </div>
            <ul className="list-group">
              <li className="list-group-item">
                <h3>{name}</h3>

                <span className="d-block text-muted">@{userName}</span>
                <hr />
                <small className="d-block text-muted">Signed in as</small>
                <span>{email}</span>
              </li>
              <li className="list-group-item">
                <button className=" btn btn-secondary btn-block">
                  Edit Profile
                </button>
              </li>
              <li className="list-group-item">
                <button
                  className=" btn btn-danger btn-block"
                  onClick={this.handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
