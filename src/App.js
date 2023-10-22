import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homePage/homepage';
import SignInPage from './pages/signinPage/signinpage';
import UserPage from './pages/userPage/userpage';
import EditPage from "./pages/editPage/editpage";
import TransactionPage from "./pages/transactionsPage/transactionspage";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleUser, faRightFromBracket, faGear, faChevronRight } from '@fortawesome/free-solid-svg-icons'
library.add(faCircleUser, faRightFromBracket, faGear, faChevronRight);

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/edit-username" element={<EditPage/>}/>
        <Route path="/transactions" element={<TransactionPage/>}/>
        <Route path="*" element={<HomePage />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
