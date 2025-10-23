import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const switchToSignup = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);

  return (
    <>
      {isLogin ? <Login switchToSignup={switchToSignup} /> : <Signup switchToLogin={switchToLogin} />}
    </>
  );
}

export default App;
