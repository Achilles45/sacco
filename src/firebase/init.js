import firebase from 'firebase';
import firestore from 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyAc3SgRL9YrsXjOnCaiVIckGA6RCJsK8ao",
    authDomain: "sacco-7904b.firebaseapp.com",
    databaseURL: "https://sacco-7904b.firebaseio.com",
    projectId: "sacco-7904b",
    storageBucket: "",
    messagingSenderId: "270132206124",
    appId: "1:270132206124:web:53e4dd1837cb3182"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({timestampsInSnapshots: true});
  export default firebaseApp.firestore();