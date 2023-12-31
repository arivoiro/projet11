import React from 'react';
import { Link } from 'react-router-dom';
import './useraccount.css';

function UserAccount({ title, accountNumber, balance, description, buttonText }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title} ({accountNumber})</h3>
        <p className="account-amount">{balance}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <Link to="/transactions" className="account-content-wrapper cta">
        <button className="transaction-button">{buttonText}</button>
      </Link>
    </section>
  );
}

export default UserAccount;
