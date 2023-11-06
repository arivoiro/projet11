import React from 'react';
import { Link } from 'react-router-dom';
import './usertransactions.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function UserTransactions({ title, accountNumber, balance, description }) {
  return (
    <section className="user-transactions">
      <div className="user-transactions-content-wrapper">
        <h3 className="user-transactions-title">{title} ({accountNumber})</h3>
        <p className="user-transactions-amount">{balance}</p>
        <p className="user-transactions-amount-description">{description}</p>
      </div>
      <Link to="/profile" className="account-content-wrapper cta">
        <FontAwesomeIcon className='user-transactions-xmark' icon="fa-solid fa-xmark" />
      </Link>
    </section>
  );
}

export default UserTransactions;