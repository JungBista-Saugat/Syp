import React from 'react';
import Navbar from './navbar.js';
import Footer from './footer.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBone,
  faHeartbeat,
  faUser,
  faUserMd,
  faTooth,
  faEye,
  faBaby
} from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <>
    <Navbar/>
    <div>


       <section className="services-container">
      <h2>Our Services</h2>
      <div className="services-row">
        <div className="service-box">
          <FontAwesomeIcon icon={faBone} />
          <h3>Bones and Muscles</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="service-box">
          <FontAwesomeIcon icon={faHeartbeat} />
          <h3>Heart Related</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="service-box">
          <FontAwesomeIcon icon={faUserMd} />
          <h3>Skin</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="service-box">
          <FontAwesomeIcon icon={faTooth} />
          <h3>Dental</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="service-box">
          <FontAwesomeIcon icon={faEye} />
          <h3>Eye</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="service-box">
          <FontAwesomeIcon icon={faBaby} />
          <h3>Child Care</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </section>

    <section className="doctors-container">
      <h2> Our Available Doctors </h2>
      <div className="doctor-row">
        {/* Doctor Box 1 */}
        <div className="doctor-box">
          <FontAwesomeIcon icon={faUser} />
          <h3>Dr. John Doe</h3>
          <p>Specialty: Neurology</p>
        </div>
        <div className="doctor-box">
          <FontAwesomeIcon icon={faUser} />
          <h3>Dr. Emily Smith</h3>
          <p>Specialty: Pediatrics</p>
        </div>
        <div className="doctor-box">
          <FontAwesomeIcon icon={faUser} />
          <h3>Dr. Sarah Johnson</h3>
          <p>Specialty: Cardiology</p>
        </div>
        <div className="doctor-box">
          <FontAwesomeIcon icon={faUser} />
          <h3>Dr. Michael Williams</h3>
          <p>Specialty: Dermatology</p>
        </div>
        <div className="doctor-box">
          <FontAwesomeIcon icon={faUser} />
          <h3>Dr. David Brown</h3>
          <p>Specialty: Orthopedics</p>
        </div>

        <Footer/>
      </div>
    </section>

    </div>
    </>
  );
}

export default Home;
