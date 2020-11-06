import React from 'react'
import './App.css';

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyBrgFTE--d8KIxrnISOJcGu9RRSDeUKniM",
  authDomain: "fireship-demos-910cf.firebaseapp.com",
  databaseURL: "https://fireship-demos-910cf.firebaseio.com",
  projectId: "fireship-demos-910cf",
  storageBucket: "fireship-demos-910cf.appspot.com",
  messagingSenderId: "990352423691",
  appId: "1:990352423691:web:73f82a75a64cbe0a6d400e",
  measurementId: "G-ZM5X4F1KDE"
})
const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;
