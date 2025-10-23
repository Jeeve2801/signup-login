import React, { useState } from 'react';
import './App.css';

function Signup({ switchToLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password !== confirmPassword){
      alert("Passwords do not match!");
      return;
    }
    alert(`Signup Successful!\nName: ${name}\nEmail: ${email}`);
  }

  return (
    <div className="login-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" value={name} onChange={(e)=>setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required />
        <button type="submit">Signup</button>
        <p className="forgot-password" onClick={switchToLogin}>Already have an account? Login</p>
      </form>
    </div>
  );
}

export default Signup;
