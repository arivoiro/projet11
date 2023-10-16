// src/pages/signinPage/SignInPage.js
import React from 'react';
import SignInForm from '../../components/signinForm/signinform';

function SignInPage() {

  return (
    <div>
      <main className="main bg-dark">
        <section className="sign-in-content">
            <div>
              <i className="fa fa-user-circle sign-in-icon"></i>
              <h1>Sign In</h1>
              <SignInForm />
            </div>
        </section>
      </main>
    </div>
  );
}

export default SignInPage;
