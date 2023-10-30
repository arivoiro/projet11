import React from 'react';
import './editpage.css';
import { useSelector } from 'react-redux';
import { selectToken } from '../../features/auth/authSlice';

import WelcomeHeader from '../../components/welcomeHeader/welcomeheader';
import EditUserInfo from '../../components/editUserInfo/edituserinfo';
import EditUserAccount from '../../components/editUserAccount/edituseraccount';

function EditPage() {

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
          <main className="main bg-dark">
            <WelcomeHeader />
          </main>
      )}
    </div>
  );
}

export default EditPage;
