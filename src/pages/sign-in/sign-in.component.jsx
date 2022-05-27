
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

import SignUpForm from "../../components/sign-up-form/sign-up-form.component"
import SignInForm from "../../components/sign-in-form/sign-in-form.component"

import "./sign-in.styles.scss"

const SignIn = () => {

    return (
        <div className="authentication-container">
          <SignInForm/>
          <SignUpForm/>
        </div>
    
    )
}

export default SignIn

/*
import { useEffect } from "react"

import { getRedirectResult } from "firebase/auth"

import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils"

useEffect(() => {
        async function getRedirect() {
        const response = await getRedirectResult(auth)
        if(response) {
           const userDocRef = await createUserDocumentFromAuth(response.user) 
        }
       
        }

        getRedirect()
        
        
    }, [])

<button onClick={signInWithGoogleRedirect}>Sign In with Google Redirect</button>

*/