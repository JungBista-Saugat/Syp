import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faSignOutAlt,
  faHome,
  faTicketAlt,
  faShare,
  faFileMedical,
  faInfoCircle,
  faHospital,
  faCog,
} from '@fortawesome/free-solid-svg-icons';


function navbar() {
  return (
    <div>
        <header>
        <div className="logo">
          <img src="logo.png" alt="HealthQ_Connect Logo" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search Here..." />
        </div>
        <div className="notification">
          <FontAwesomeIcon icon={faBell} />
        </div>
        <button className="login-btn">Login</button>
        <div className="logout-btn">
        <a href="/">
          <FontAwesomeIcon icon={faSignOutAlt} />
          </a>
        </div>
      </header>

<nav id="left-navbar">
        <div className="menu-container">
          <div className="menu-item">
            <a href="/home">
              <FontAwesomeIcon icon={faHome} /> Home
            </a>
          </div>
          <div className="menu-item">
            <a href="/token">
              <FontAwesomeIcon icon={faTicketAlt} /> Token
            </a>
          </div>
          <div className="menu-item">
            <a href="#">
              <FontAwesomeIcon icon={faShare} /> Refer
            </a>
          </div>
          <div className="menu-item">
            <a href="/report">
              <FontAwesomeIcon icon={faFileMedical} /> Report
            </a>
          </div>
          <div className="menu-item">
            <a href="#">
              <FontAwesomeIcon icon={faInfoCircle} /> About Us
            </a>
          </div>
          <div className="menu-item">
            <a href="#">
              <FontAwesomeIcon icon={faHospital} /> Services
            </a>
          </div>
          <div className="menu-item">
            <a href="#">
              <FontAwesomeIcon icon={faCog} /> Settings
            </a>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default navbar
