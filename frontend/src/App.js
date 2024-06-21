import React from 'react';
import LoginPage from './component/login'; 
import RegisterPage from './component/register'; 
import './component/login.css'; 
import './component/register.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/home.js';
import './component/hoome.css';
import Token from './component/Token.js';
import Report from './component/report.js';
import './component/navbar.css'
import './component/footer.css'
import './component/token.css'
import './component/report.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/token" element={<Token/>} />
          <Route path="/report" element={<Report/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
