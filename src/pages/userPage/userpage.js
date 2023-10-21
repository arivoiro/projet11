import React from 'react';
import WelcomeHeader from '../../components/welcomeHeader/welcomeheader';
import UserAccount from '../../components/userAccount/useraccount';
import { useSelector } from 'react-redux';
import { selectToken, selectUserName } from '../../features/auth/authSlice';
import './userpage.css';

function UserPage() {
  const token = useSelector(selectToken);
  const userName = useSelector(selectUserName);

  return (
    <div>
      {token ? (
        <main className="main bg-dark">
          <WelcomeHeader username={userName || 'User'} />
          <UserAccount
            title="Argent Bank Checking"
            accountNumber="x8349"
            balance="$2,082.79"
            description="Available Balance"
            buttonText="View transactions"
          />
          <UserAccount
            title="Argent Bank Savings"
            accountNumber="x6712"
            balance="$10,928.42"
            description="Available Balance"
            buttonText="View transactions"
          />
          <UserAccount
            title="Argent Bank Credit Card"
            accountNumber="x8349"
            balance="$184.30"
            description="Current Balance"
            buttonText="View transactions"
          />
        </main>
      ) : (
        <main className="main bg-dark">
          <WelcomeHeader />
        </main>
      )}
    </div>
  );
}

export default UserPage;
