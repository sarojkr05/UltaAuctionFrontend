import React, { useState } from 'react'
import { toast } from 'react-toastify';
import SignupPresentation from './SignupPresentation';
// Container for the signup page
function Signup() {
    const [signUpState, setSignUpState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        password: ''
    });

    function handleUserInput(e) {
        const {name, value} = e.target;
        setSignUpState({
            ...signUpState,
            [name]: value
        })
    }

    function handleFormSubmit(e) {
        e.preventDefault(); // 🔒 Prevent full-page reload
        console.log(signUpState)

        // Add validations for the form input
        if(!signUpState.email || !signUpState.mobileNumber || !signUpState.password || !signUpState.firstName) {
            toast.error("Missing values from the form");
        }

        if(signUpState.firstName.length < 3 || signUpState.firstName.length > 15) {
            toast.error("First name should be atleast 3 characters long and maximum 15 characters long")
        }
        // check email
        if(!signUpState.email.includes('@' || !signUpState.email.includes('.'))) {
            toast.error("Please fill a valid email")
        }

        // check mobile number
        if(signUpState.mobileNumber.length < 10 || signUpState.mobileNumber.length > 12) {
            toast.error("Mobile number should be between 10-12 digits long")
        }
    }

  return (
    <SignupPresentation 
    handleFormSubmit={handleFormSubmit} 
    handleUserInput={handleUserInput}
    />
  )
}

export default Signup
