import './css/style.css';
import './css/code-block.css';
import './css/spinner.css';
import './css/button.css'
import './css/accordian.css'

import * as firebase from 'firebase';

// INIT FIREBASE APPLICATION
const config = {
  apiKey: "AIzaSyDXhfEF-8WbOOyIcMGOQZB4xULudK9eGVk",
  authDomain: "rxjs-firebase-simple-demo.firebaseapp.com",
  databaseURL: "https://rxjs-firebase-simple-demo.firebaseio.com",
  projectId: "rxjs-firebase-simple-demo",
  storageBucket: "",
  messagingSenderId: "776060028988"
};

let app = null;
try {
  firebase.initializeApp(config)
} catch (e) {
  app = firebase.app();
}