import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../logo/logo.png";

export default function Header(props) {
  let loader = <div className="loading"></div>;
  if (props.isLoading) {
    loader = <div className="loading animation"></div>;
  }

  const closeHandler = function () {
    document.querySelector(".header").classList.toggle("nav-open");
  };

  return (
    <div className="main-header">
      <header className="header">
        <div className="logo">
          <a href="/MyTube">
            <img className="logo-img" src={logo} alt="logo" />
          </a>
        </div>
        <div className="nav-links" onClick={closeHandler}>
          <ul>
            <li>
              <NavLink to="/MyTube" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active-nav-link"
                className="nav-link"
                to="/newsLive"
              >
                <span className="live-icon"> &#9679; </span>
                Live News
              </NavLink>
            </li>
          </ul>
        </div>

        <button className="nav-btn-mobile" onClick={closeHandler}>
          <ion-icon className="nav-icon-mobile" name="menu-outline"></ion-icon>
          <ion-icon className="nav-icon-mobile" name="close-outline"></ion-icon>
        </button>
      </header>
      {loader}
    </div>
  );
}
