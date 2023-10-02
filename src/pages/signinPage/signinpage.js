import React from 'react';
import Header from '../../components/header/header';
import SignInForm from '../../components/signinForm/signinform';
import Footer from '../../components/footer/footer';
import './signinpage.css';

function SignInPage() {
  return (
    <div>
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <SignInForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default SignInPage;
