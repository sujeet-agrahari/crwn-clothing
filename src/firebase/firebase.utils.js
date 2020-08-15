import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCb5uiEqHaiTiFV6fbgneTuhG3fkgspUog",
  authDomain: "crwn-db-5277c.firebaseapp.com",
  databaseURL: "https://crwn-db-5277c.firebaseio.com",
  projectId: "crwn-db-5277c",
  storageBucket: "crwn-db-5277c.appspot.com",
  messagingSenderId: "1063533596982",
  appId: "1:1063533596982:web:46cb7721b2c4ceada9a397",
  measurementId: "G-0EVFLPDEL2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'  });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;