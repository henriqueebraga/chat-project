// Your web app's Firebase configuration
import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDk4odj_voFfP6_YVxvZh_4qw89KD_BkCk",
    authDomain: "chat-project-24915.firebaseapp.com",
    databaseURL: "https://chat-project-24915.firebaseio.com",
    projectId: "chat-project-24915",
    storageBucket: "chat-project-24915.appspot.com",
    messagingSenderId: "148429500556",
    appId: "1:148429500556:web:bf6d95c9353201a1bc8ba9",
    measurementId: "G-W9FJGQ1WDF"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  export default firebaseApp.firestore()

