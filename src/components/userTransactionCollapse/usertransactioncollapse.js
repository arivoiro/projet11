import React from 'react';
import './usertransactioncollapse.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({ date, description, amount, balance, transactionType, category, note, isOpen, onClick }) => {
  return (
    <div className={`collapse ${isOpen ? 'open' : 'close'}`}>
      <div className="collapse-header" onClick={onClick}>
        <div className="collapse-header-grid">
          <div className="collapse-header-grid-date">{date}</div>
          <div className="collapse-header-grid-description">{description}</div>
          <div className="collapse-header-grid-amount">{amount}</div>
          <div className="collapse-header-grid-balance">{balance}</div>
        </div>
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`collapse-arrow`}
        />
      </div>
      <div className={`collapse-content ${isOpen ? 'open' : 'close'}`}>
        <div className="collapse-content-grid">
          <div className="collapse-content-grid-transaction">
            Transaction Type
          </div>
          <div className="collapse-content-grid-description">
            {transactionType}
          </div>
        </div>
        <div className="collapse-content-grid">
          <div className="collapse-content-grid-category">
            Category
          </div>
          <div className="collapse-content-grid-description">
            {category}
          </div>
        </div>
        <div className="collapse-content-grid">
          <div className="collapse-content-grid-note">
            Note
          </div>
          <div className="collapse-content-grid-description">
            {note}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
