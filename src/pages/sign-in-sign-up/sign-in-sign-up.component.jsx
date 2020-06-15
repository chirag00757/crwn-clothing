import React from 'react';
import SignIn from '../../components/sign-in/sign-in.components';
import SignUp from '../../components/sign-up/sign-up.components';
import './sign-in-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
    <div className="sign-in-sign-up">
       <div className="signIn">
            <SignIn />
       </div>
       <div className="signUp">
            <SignUp />
       </div>
    </div>
)

export default SignInAndSignUpPage;