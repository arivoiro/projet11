import React from 'react';
import './editpage.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from '../../features/auth/authSlice';

import EditUserInfo from '../../components/editUserInfo/edituserinfo';
import EditUserAccount from '../../components/editUserAccount/edituseraccount';

function HomePage() {

  const token = useSelector(selectToken);

  return (
    <div>
      {token ? (
        <section className="edit-user-content">
          <EditUserInfo />
          <EditUserAccount
            title="Argent Bank Checking"
            accountNumber="x3448"
            balance="$48,098.43"
            description="Available Balance"
          />
          <EditUserAccount
            title="Argent Bank Checking"
            accountNumber="x3448"
            balance="$48,098.43"
            description="Available Balance"
          />
          <EditUserAccount
            title="Argent Bank Checking"
            accountNumber="x3448"
            balance="$48,098.43"
            description="Available Balance"
          />
        </section>
        ) : (
          <Link to="/sign-in">
            <div className='logging-again'>Try logging in again</div>
          </Link>
      )}
    </div>
  );
}

export default HomePage;
