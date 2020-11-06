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

function SignIn() {
  const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider()
      auth.signInWithPopup(provider)
  }
  return (
      <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut() {
  return auth.currentUser && (
      <button onClick={() => auth.SignOut()}>Sign Out</button>
  )
}

function ChatMessage() {
  const {text, uid, photoURL} = props.message
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'
  return (
      <div className={`message ${messageClass}`}>
        <img src={photoURL} />
        <p>{text}</p>
      </div>
  )
}

function ChatRoom() {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25)
  const [messages] = useCollectionData(query, {idField: 'id'})
  return (
      <>
          <div>
              {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
          </div>
          <div>

          </div>
      </>
  )
}

export default App;
