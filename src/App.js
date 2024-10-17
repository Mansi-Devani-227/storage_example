import React, { useState, useEffect } from 'react';
import './styles.css';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const savedEmail = sessionStorage.getItem('email');
    const savedPassword = sessionStorage.getItem('password');
    if (savedEmail) setEmail(savedEmail);
    if (savedPassword) setPassword(savedPassword);
  }, []);

  const handleSave = () => {
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('password', password);
    alert('Email and Password saved to session storage!');
  };

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      sessionStorage.removeItem('email');
      sessionStorage.removeItem('password');
    });
  }, []);

  return (
    <div className="App">
      <h1>Email & Password (Session Storage)</h1>

      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleSave}>Save to Session Storage</button>
      </div>
    </div>
  );
};

export default App;
