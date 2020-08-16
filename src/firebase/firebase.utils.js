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
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'  });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;