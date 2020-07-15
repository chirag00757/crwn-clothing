import React, {useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomeButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import {SignUpContainer,TitleContainer} from  './sign-up.styles';

const SignUp = () => {
    const [userCredential,setCredential] = useState({
        displayName: '',
        email:'',
        password:'',
        confirmPassword:''
    });
    const {displayName,email,password,confirmPassword} = userCredential;
   const handleSubmit = async event => {
        event.preventDefault();
        
        if(password  !== confirmPassword){
            alert("Password don't match");
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName});
            setCredential({
                ...userCredential,
                displayName: '',
                email:'',
                password:'',
                confirmPassword:''
            })
        }
        catch (error){

            console.error(error);

        }
    };

    const handleChange = events => {
        const {name,value} = events.target;

        setCredential({...userCredential,[name]:value});
    }
   
        
        return(
        <SignUpContainer>
            <TitleContainer>I do not have an account</TitleContainer>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                    label="Display Name"
                    required

                />
                <FormInput
                    type='email'
                    name="email"
                    value={email}
                    onChange={handleChange}
                    label="Email"
                    required

                />
                <FormInput
                    type='password'
                    name="password"
                    value={password}
                    onChange={handleChange}
                    label="Password"
                    required

                />
                <FormInput
                    type='password'
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    label="Confirm Password"
                    required

                />
                <CustomeButton type='submit' >Sign Up</CustomeButton>
            </form>
        </SignUpContainer>)
    
}

export default SignUp;