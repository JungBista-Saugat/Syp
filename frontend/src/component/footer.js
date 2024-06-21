import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';

const footer = () => {
  return (
    <>
    <div>
    <footer>
        <h3>HealthQ_Connect</h3>
        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Services</a>
          <a href="#">Blog</a>
          <a href="#"><FontAwesomeIcon icon={faGlobe} /></a>
        </div>
        <p>&copy; 2024 HealthQ_Connect. All Rights Reserved.</p>
      </footer>
    </div>
    </>
  )
}

export default footer
