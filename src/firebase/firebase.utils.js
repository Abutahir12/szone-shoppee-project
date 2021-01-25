import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCZcpqYkWfmRwymIhPdWpzfaxkvtYt9V3w",
    authDomain: "szone-db.firebaseapp.com",
    projectId: "szone-db",
    storageBucket: "szone-db.appspot.com",
    messagingSenderId: "791844294568",
    appId: "1:791844294568:web:e7d2f5109f200a7ede979d",
    measurementId: "G-NX4PK4PFP2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
