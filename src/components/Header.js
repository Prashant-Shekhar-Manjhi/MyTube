import React from "react";
import "./Header.css";
import logo from "../logo/logo.png";

export default function Header(props) {
  let loader = <div className="loading"></div>;
  if (props.isLoading) {
    loader = <div className="loading animation"></div>;
  }

  return (
    <div className="main-header">
      <header className="header">
        <div className="logo">
          <a href="/MyTube">
            <img className="logo-img" src={logo} alt="logo" />
          </a>
        </div>
        <div className="nav-links hidden">
          <ul>
            <li>
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <button className="nav-btn-open">
          <ion-icon name="menu-sharp"></ion-icon>
        </button>
      </header>
      {loader}
    </div>
  );
}
