import React, { useState, useEffect } from 'react';
import './transactionspage.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken, updateCategory, updateNote } from '../../features/auth/authSlice';

import WelcomeHeader from '../../components/welcomeHeader/welcomeheader';
import UserTransactions from '../../components/userTransactions/usertransactions';
import UserTransactionCollapse from '../../components/userTransactionCollapse/usertransactioncollapse';
import EditCategory from '../../components/editCategory/editcategory';
import EditNote from '../../components/editNote/editnote';

function TransactionPage() {

  const token = useSelector(selectToken);
  const [collapseStates, setCollapseStates] = useState([]);

  const handleCollapseClick = (index) => {
    setCollapseStates((prevState) => {
      const newStates = [...prevState];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const numItems = 5;

  const initialCategories = Array(numItems).fill("Food");
  const initialNotes = Array(numItems).fill("lorem ipsum");

  const [categories, setCategories] = useState(initialCategories);
  const [notes, setNotes] = useState(initialNotes);

  const dispatch = useDispatch();

const handleCategoryUpdate = (index, newCategory) => {
  const updatedCategories = [...categories];
  updatedCategories[index] = newCategory;
  setCategories(updatedCategories);

  dispatch(updateCategory(newCategory));

  localStorage.setItem('categories', JSON.stringify(updatedCategories));
};

const handleNoteUpdate = (index, newNote) => {
  const updatedNotes = [...notes];
  updatedNotes[index] = newNote;
  setNotes(updatedNotes);

  dispatch(updateNote(newNote));

  localStorage.setItem('notes', JSON.stringify(updatedNotes));
};

useEffect(() => {
  const storedCategories = localStorage.getItem('categories');
  if (storedCategories) {
    setCategories(JSON.parse(storedCategories));
  }

  const storedNotes = localStorage.getItem('notes');
  if (storedNotes) {
    setNotes(JSON.parse(storedNotes));
  }
}, []);

  return (
    <div>
    {token ? (
      <section className="transaction-content">
        <UserTransactions
          title="Argent Bank Checking"
          accountNumber="x3448"
          balance="$48,098.43"
          description="Available Balance"
        />
        <div className="transactions-header-grid">
          <div className="transactions-header-grid-date">Date</div>
          <div className="transactions-header-grid-description">Description</div>
          <div className="transactions-header-grid-amount">Amount</div>
          <div className="transactions-header-grid-balance">Balance</div>
        </div>
        <UserTransactionCollapse
          date="27/02/20"
          description="Golden Sun Bakery"
          amount="$8.00"
          balance="$298.00"
          transactionType="Electronic"
          category={
          <EditCategory
            category={categories[0]}
            onUpdate={(newCategory) => handleCategoryUpdate(0, newCategory)}
          />
          }
          note={ 
          <EditNote
            note={notes[0]}
            onUpdate={(newNote) => handleNoteUpdate(0, newNote)}
          />
          }
          isOpen={collapseStates[0]}
          onClick={() => handleCollapseClick(0)}
        />
        <UserTransactionCollapse
          date="27/02/20"
          description="Golden Sun Bakery"
          amount="$8.00"
          balance="$298.00"
          transactionType="Electronic"
          category={
            <EditCategory
              category={categories[1]}
              onUpdate={(newCategory) => handleCategoryUpdate(1, newCategory)}
            />
            }
            note={ 
            <EditNote
              note={notes[1]}
              onUpdate={(newNote) => handleNoteUpdate(1, newNote)}
            />
            }
          isOpen={collapseStates[1]}
          onClick={() => handleCollapseClick(1)}
        />
        <UserTransactionCollapse
          date="27/02/20"
          description="Golden Sun Bakery"
          amount="$8.00"
          balance="$298.00"
          transactionType="Electronic"
          category={
            <EditCategory
              category={categories[2]}
              onUpdate={(newCategory) => handleCategoryUpdate(2, newCategory)}
            />
            }
            note={ 
            <EditNote
              note={notes[2]}
              onUpdate={(newNote) => handleNoteUpdate(2, newNote)}
            />
            }
          isOpen={collapseStates[2]}
          onClick={() => handleCollapseClick(2)}
        />
        <UserTransactionCollapse
          date="27/02/20"
          description="Golden Sun Bakery"
          amount="$8.00"
          balance="$298.00"
          transactionType="Electronic"
          category={
            <EditCategory
              category={categories[3]}
              onUpdate={(newCategory) => handleCategoryUpdate(3, newCategory)}
            />
            }
            note={ 
            <EditNote
              note={notes[3]}
              onUpdate={(newNote) => handleNoteUpdate(3, newNote)}
            />
            }
          isOpen={collapseStates[3]}
          onClick={() => handleCollapseClick(3)}
        />
        <UserTransactionCollapse
          date="27/02/20"
          description="Golden Sun Bakery"
          amount="$8.00"
          balance="$298.00"
          transactionType="Electronic"
          category={
            <EditCategory
              category={categories[4]}
              onUpdate={(newCategory) => handleCategoryUpdate(4, newCategory)}
            />
            }
            note={ 
            <EditNote
              note={notes[4]}
              onUpdate={(newNote) => handleNoteUpdate(4, newNote)}
            />
            }
          isOpen={collapseStates[4]}
          onClick={() => handleCollapseClick(4)}
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

export default TransactionPage;
