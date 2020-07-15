import React, {useState} from 'react';
import {SignInContainer,ButtonContainer,SignInTitle} from './sign-in.styles';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils';
const SignIn = () => {
    
    const [userCredentials,setCredentials] = useState({
            email: '',
            password:''
        });
    const {email, password} = userCredentials;
    const handleSubmit = async event => {
        event.preventDefault();
       
        try{
            await auth.signInWithEmailAndPassword(email,password);
            setCredentials({...userCredentials,email:'',password:''});
        }
        catch (error){
            console.log(console.error);
            
        }
        
        setCredentials({...userCredentials,email:'',password:''})
    }
    const handleChange = event => {
        const {value,name} = event.target;
        setCredentials({...userCredentials,[name]:value})
    }
  
        return(
            <SignInContainer>
              <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>
                <form onSubmit={handleSubmit}>
                 <FormInput 
                   type="email"
                   name="email"
                   value={email}
                   handleChange={handleChange}
                   label="email"
                   required />
                
                <FormInput
                   type="password"
                   name="password"
                   value={password}
                   handleChange={handleChange}
                   label="password"
                   required />
                <ButtonContainer>
                <CustomButton type="submit"> Sign In</CustomButton>
                <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn> Sign in with google </CustomButton>
                </ButtonContainer>
              
                </form>
            </SignInContainer>
        )
    

}

export default SignIn;