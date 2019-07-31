import React, { Component } from "react";
import { Link } from "react-router-dom";
const axios = require("axios");

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: localStorage.getItem("userEmail"),
      password: localStorage.getItem("userPassword"),
      err: ""
    };
  }

  handleLogin = e => {
    e.preventDefault();
    const loginData = {
      email: this.refs.email.value,
      password: this.refs.password.value
    };
    axios
      .request({
        method: "post",
        url: "https://loopback-react-btc-wallet.herokuapp.com/api/Users/login",
        data: loginData
      })
      .then(res => {
        // setting temporary local storage values
        localStorage.setItem("userID", res.data.userId);
        localStorage.setItem("userEmail", loginData.email);
        localStorage.setItem("isLogged", true);
        localStorage.setItem("accessToken", res.data.id);
        this.props.history.push(`/dashboard?access_token=${res.data.id}`);
      })
      .catch(err => {
        console.log(err);
        this.setState({
          err: err.response.data.error.message
        });
      });
  };

  onLoginChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    localStorage.setItem("userID", "");
    return (
      <div className="container">
        <Link className="btn btn-secondary mb-3 mt-3 btn-sm" to="/">
          <i className="fa fa-arrow-left" />
          <i className="fa fa-home ml-3" />
        </Link>
        <h3>Login</h3>
        <form onSubmit={this.handleLogin.bind(this)}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              name="email"
              onChange={this.onLoginChange}
              value={this.state.email}
              ref="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              name="password"
              onChange={this.onLoginChange}
              value={this.state.password}
              ref="password"
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
        <div className="mt-3">
          <p className="text-warning">{this.state.err}</p>{" "}
        </div>
      </div>
    );
  }
}
