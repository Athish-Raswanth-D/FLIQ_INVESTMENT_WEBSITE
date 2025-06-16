import axios from 'axios';
import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
React.useEffect(() => {
const handleLoginChange = () => {
const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
setIsLoggedIn(isLoggedIn);
};
window.addEventListener('loginChange', handleLoginChange);
return () => window.removeEventListener('loginChange', handleLoginChange);
}, []);
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!username || !password) {
      alert('Please fill in all fields');
      return;
    }

    try {
      if (isLogin) {
        const response = await axios.post('http://localhost:3000/api/users/login', { username, password });
        const userId = response.data.user.id;
        localStorage.setItem('userId', userId);
        localStorage.setItem('username', username);
        alert(`Welcome back ${username}`);
        localStorage.setItem('isLoggedIn', true);
        window.dispatchEvent(new Event('loginChange'));
        navigate('/profile'); // Redirect to profile page after login
      } else {
        const response = await axios.post('http://localhost:3000/api/users/signup', { username, password });
        alert(`Account created for: ${username}`);
        setIsLogin(true);
      }
    } catch (error) {
      console.error(error.response?.data?.message || error.message);
      alert(error.response?.data?.message || error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-wrapper">
      <div className="form-container">
        {isLogin ? (
          <div className="login-form">
            <h2>Login</h2>
            <input
              type="text"
              name="username"
              placeholder="Email"
              value={username}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>Login</button>
            <p onClick={toggleForm} className="toggle-link">
              Don't have an account? Sign Up
            </p>
          </div>
        ) : (
          <div className="signup-form">
            <h2>Sign Up</h2>
            <input
              type="text"
              name="username"
              placeholder="Email"
              value={username}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>Sign Up</button>
            <p onClick={toggleForm} className="toggle-link">
              Already have an account? Login
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;