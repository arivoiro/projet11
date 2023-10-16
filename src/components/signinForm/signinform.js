import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, loginUserSuccess } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import './signinform.css';

function SignInForm() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
  
    const { email, password } = loginData;
  
    try {
      const responseData = await dispatch(loginUser({ email, password }));
      console.log(responseData);
    
      if (responseData.status === 200) {
        if (responseData && responseData.body && responseData.body.token) {
          console.log(responseData);
          dispatch(loginUserSuccess(responseData.body.token));
          navigate('/home');
        } else {
          setError('Invalid email or password');
        }
      } else {
        if (responseData.status === 400) {
          setError('Invalid Fields');
        } else if (responseData.status === 500) {
          setError('Internal Server Error');
        } else {
          setError('HTTP Error: ' + responseData.status);
        }
      }
    } catch (error) {
      setError("Error validating login: " + error.message);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="email">Username</label>
        <input
          type="text"
          id="email"
          value={loginData.email}
          autoComplete="current-email"
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={loginData.password}
          autoComplete="current-password"
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button type="submit" className="sign-in-button">
        Sign In
      </button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}

export default SignInForm;
