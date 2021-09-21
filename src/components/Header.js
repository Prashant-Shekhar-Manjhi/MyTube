import React from "react";
import "./Header.css";
import logo from "../logo/logo.png";

export default function Header() {
  return (
    <header className="main-header">
      <div className="logo">
        <a href="/">
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

      <button className="nav-btn">
        <ion-icon name="menu-sharp"></ion-icon>
      </button>
    </header>
  );
}
