import React from 'react'

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const auth = firebase.auth();

function SignOut() {
    return auth.currentUser && (
        <button onClick={() => auth.SignOut()}>Sign Out</button>
    )
}

export default SignOut