import React from 'react';
import Header from '../../components/header/header';
import WelcomeHeader from '../../components/welcomeHeader/welcomeheader';
import UserAccount from '../../components/userAccount/useraccount';
import Footer from '../../components/footer/footer';
import './userpage.css';

function UserPage() {
  return (
    <div>
      <Header />
      <main className="main bg-dark">
        <WelcomeHeader username="Tony Jarvis" />
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
      <Footer />
    </div>
  );
}

export default UserPage;
