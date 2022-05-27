
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

import SignUpForm from "../../components/sign-up-form/sign-up-form.component"

const SignIn = () => {
    

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    }


    return (
        <>
          <h1>Sign In</h1>
          <button onClick={logGoogleUser}>Sign In with Google Popup</button>
          <SignUpForm/>
        </>
    
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