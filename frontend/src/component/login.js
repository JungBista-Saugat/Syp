import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="container">
    <div className="App">

      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </label>
        
        <Link to="/home"><button type="submit">Login</button></Link>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register now</Link>
      </p>
    </div>
    </div>
  );
}

export default LoginPage;