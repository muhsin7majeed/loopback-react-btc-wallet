import React, { Component } from "react";
import { Link } from "react-router-dom";
const axios = require("axios");

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      userName: "",
      email: "",
      password: "",
      password2: "",

      userNameError: "",
      password2Error: "",
      generalError: ""
    };
  }

  handleChange = e => {
    const Name = e.target.name;
    const value = e.target.value;

    if (/\S/.test(value)) {
      this.setState({
        [Name]: value
      });
    } else {
      this.setState({
        [Name]: ""
      });
    }
  };

  handleValidation = () => {
    let isFormValid = true;
    let { userName, password, password2 } = this.state;

    // User Name
    if (userName.indexOf(" ") >= 0) {
      isFormValid = false;
      this.setState({
        userNameError: "user name should not contain white spaces"
      });
    } else {
      this.setState({
        userNameError: ""
      });
    }

    // passwords
    if (password !== password2 || password.indexOf(" ") >= 0) {
      this.setState({
        password2Error:
          "passwords should match and should not contain white spaces"
      });
      isFormValid = false;
    } else {
      this.setState({ password2Error: "" });
    }

    return isFormValid;
  };

  ontSubmit = e => {
    e.preventDefault();
    if (this.handleValidation()) {
      this.handleSignup();
      console.log("Form submitted");
    } else {
      console.log("Form has errors.");
    }
  };

  handleSignup = e => {
    // const userApi = "https://loopback-react-btc-wallet.herokuapp.com/api/Users";
    // const btcWalletApi =
    //   "https://loopback-react-btc-wallet.herokuapp.com/api/bitcoinWallets";

    const { name, userName, email, password } = this.state;

    const userData = {
      username: userName,
      email: email,
      password: password
    };

    axios
      .request({
        method: "post",
        url: "https://loopback-react-btc-wallet.herokuapp.com/api/Users",
        data: userData
      })
      .then(res => {
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);
        const bitcoinData = {
          name: name,
          userName: userName,
          email: email,
          btcUserID: res.data.id,
          btcBalance: 0,
          btcBalanceUpdater: 0
        };

        axios
          .request({
            method: "post",
            url:
              "https://loopback-react-btc-wallet.herokuapp.com/api/bitcoinWallets",
            data: bitcoinData
          })
          .then(res => {
            this.props.history.push("/login");
          })
          .catch(err => {
            console.log(err);
            this.setState({
              generalError: err.response.data.error.message
            });
          });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          generalError: err.response.data.error.message
        });
      });
  };
  render() {
    localStorage.setItem("userEmail", "");
    localStorage.setItem("userPassword", "");
    return (
      <div className="container">
        <Link className="btn btn-secondary mb-3 mt-3 btn-sm" to="/">
          <i className="fa fa-arrow-left" />
          <i className="fa fa-home ml-3" />
        </Link>
        <h3>Sign Up</h3>
        <form onSubmit={this.ontSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputName">Enter your Name</label>
            <input
              pattern=".{4,30}"
              required
              onChange={this.handleChange}
              value={this.state.name}
              name="name"
              type="text"
              className="form-control"
              id="exampleInputName"
              placeholder="Enter your name"
            />
            <small className="text-muted">
              name should be more than 4 characters and less than 30
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputUserName">Enter a user name</label>
            <input
              pattern=".{4,16}"
              required
              onChange={this.handleChange}
              value={this.state.userName}
              name="userName"
              type="text"
              className="form-control"
              id="exampleInputUserName"
              placeholder="Enter a user name"
            />
            <small className="text-muted">
              user name should be more than 4 characters and less than 16
            </small>
            <br />
            <small className="text-danger">{this.state.userNameError}</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              required
              onChange={this.handleChange}
              value={this.state.email}
              name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              required
              pattern=".{4,8}"
              onChange={this.handleChange}
              value={this.state.password}
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
            <small className="text-muted">
              password should be more than 4 characters and less than 8
            </small>
            <br />
            <small className="text-danger">{this.state.passwordError}</small>

            <input
              required
              onChange={this.handleChange}
              value={this.state.password2}
              name="password2"
              type="password"
              className="form-control"
              id="exampleInputPassword2"
              placeholder="Re-enter password"
            />
            <small className="text-danger">{this.state.password2Error}</small>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <div className="mt-3">
            <small className="text-danger">{this.state.generalError}</small>
          </div>
        </form>
      </div>
    );
  }
}
