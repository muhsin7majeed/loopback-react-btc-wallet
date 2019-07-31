import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import bg from "../assets/bg.jpg";

export default function LandingPage() {
  localStorage.setItem("isLogged", false);
  localStorage.setItem("accessToken", "");
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          BTC <i className="fab fa-bitcoin" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Link className="nav-link" to="/about">
            About Us <span className="sr-only">(current)</span>
          </Link>
          <div className="ml-auto">
            <Link className="btn btn-success btn-sm" to="/signup">
              Sign up
            </Link>
            <Link className="btn btn-primary btn-sm ml-3" to="/login">
              Login
            </Link>
          </div>
        </div>
      </nav>

      <div className="backGround">
        <img className="bg-img" src={bg} alt="" />
        <div className="container text-center">
          <div className="landingPage jumbotron bg-transparent ">
            <h2 className='font-weight-bold'>Make Every Move Carefully</h2>
            <p className="t">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              deserunt eaque neque, eius dicta labore iure iste voluptatum? Odit
              dignissimos labore omnis dicta, maiores hic reiciendis dolorem
              accusamus saepe natus!
            </p>
            <Link className="btn btn-success " to="/signup">
              Sign up
            </Link>
            <Link className="btn btn-primary ml-3" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
