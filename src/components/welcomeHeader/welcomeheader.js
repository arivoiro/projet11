import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from '../../features/auth/authSlice';
import './welcomeheader.css';

function WelcomeHeader({ username }) {
  const token = useSelector(selectToken);
  
  return (
    <div>
    {token ? (    
      <div className="header">
        <h1>Welcome back<br />{username}!</h1>
        <Link to="/edit-username">
          <button className="edit-button">Edit Name</button>
        </Link>
      </div>
      ) : (
        <Link to="/login">
          <button className="edit-button tryAgain">Try logging in again</button>
        </Link>
      )}
    </div>

  );
}

export default WelcomeHeader;
