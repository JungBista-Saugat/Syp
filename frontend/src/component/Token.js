import React from 'react'
import Navbar from './navbar.js';
import Footer from './footer.js';
import { useState } from 'react';

function Token() {
    const [token, setToken] = useState(null); 
  
    const generateToken = () => {
      if (!token) { 
        setToken(1000); 
      }
    };
  
    return (
        <>
        <Navbar/>
      <div>
        <div className="generate-token-container">
          <button onClick={generateToken} disabled={token !== null}>Generate</button>
          <p>Token Series: {token !== null ? token : 'Not generated'}</p>
          <p>You can just generate one token at a time</p>
          <p>As backend is not connect then a can just create one token at a time in one session. to minimize  the chance of collision.</p>
        </div>
      </div>
      <Footer/>
        </>
    );
  }

export default Token;
