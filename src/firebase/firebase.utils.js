import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCIEQ1chc_6f_uJ55FF8S3iUpBgF8FKXyk",
    authDomain: "crwn-db-5c777.firebaseapp.com",
    projectId: "crwn-db-5c777",
    storageBucket: "crwn-db-5c777.appspot.com",
    messagingSenderId: "1017983991480",
    appId: "1:1017983991480:web:953146c5cad29d01ee3e4d",
    measurementId: "G-4VMG5TTLCE"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;