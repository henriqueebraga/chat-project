// Your web app's Firebase configuration
import firebase from 'firebase'

var firebaseConfig = {
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  export default firebaseApp.firestore()

