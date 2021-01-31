import React from 'react'
import SignIn from '../../component/signin/signin.component'
import SignUp from '../../component/sign-up/sign-up.component'
import "./sign-in-and-sign-up.styles.scss"

const SignInSignUp = () => (
    <div className="sign-in-sign-up">
        <SignIn/>
        <SignUp/>
    </div>
);

export default SignInSignUp;