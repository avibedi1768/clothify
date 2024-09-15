import React, { useState } from 'react';
import Orders from './Orders';

const Admin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the username and password match the hardcoded values
    if (username === 'user12' && password === 'pass12') {
      setAuthenticated(true);
      setError(''); // Clear any previous error message
    } else {
      setError('Wrong credentials. Please try again.');
    }
  };

  // If the user is authenticated, show the admin sections
  if (authenticated) {
    return (
      <div>
        <h1>Admin Page</h1>
        <section>
          <h2>Completed Orders</h2>
          <Orders status="completed" />
        </section>
        <section>
          <h2>Pending Orders</h2>
          <Orders status="pending" />
        </section>
      </div>
    );
  }

  // Otherwise, show the login form
  return (
    <div>
      <div style={{ minHeight: '30vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1>Admin Login</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label>Username: </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Admin;
