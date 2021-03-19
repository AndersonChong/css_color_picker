import app from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwB1Dk0YFdk8bmQIOBkTb7YPq9AF46rIw",
  authDomain: "css-gradient-picker-21.firebaseapp.com",
  projectId: "css-gradient-picker-21",
  storageBucket: "css-gradient-picker-21.appspot.com",
  messagingSenderId: "512782264994",
  appId: "1:512782264994:web:d55798e0c14285f3f245fb",
  measurementId: "G-ZEDS9VX073",
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    app.analytics();
    this.auth = app.auth();
    this.db = app.firestore();
  }

  createUserWithEmailAndPassword(email, password) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  doSignInWithEmailAndPassword(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  doSignOut() {
    return this.auth.signOut();
  }

  serverTimeStamp() {
    return app.firestore.FieldValue.serverTimestamp();
  }
}

export default Firebase;
