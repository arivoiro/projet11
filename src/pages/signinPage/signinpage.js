import React from 'react';
import SignInForm from '../../components/signinForm/signinform';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SignInPage() {

  return (
    <div>
      <main className="main bg-dark">
        <section className="sign-in-content">
            <div>
              <FontAwesomeIcon className="iconCircle" icon="fa-solid fa-circle-user" />
              <h1>Sign In</h1>
              <SignInForm />
            </div>
        </section>
      </main>
    </div>
  );
}

export default SignInPage;
