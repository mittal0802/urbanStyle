import { initializeApp } from "firebase/app";
import {onAuthStateChanged, getAuth, signOut, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword ,signInWithRedirect, GoogleAuthProvider} from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBR9rf21kw5ZhtXe1JxD1uCW9k7PzjdydQ",
  authDomain: "urbanstyle-db.firebaseapp.com",
  projectId: "urbanstyle-db",
  storageBucket: "urbanstyle-db.appspot.com",
  messagingSenderId: "943971658225",
  appId: "1:943971658225:web:0960da07f376deb1eebc50"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ 
  prompt: 'select_account' 
});

//auth
export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);


//firestore
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) =>{
  if(!userAuth){
    return;
  }
  const userRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userRef);

  //if user data does not exist in the database, create it
  //set the user data in the database from userAuth
  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    }
    catch(error){
      console.log('error creating the user', error.message);
    }
  }
  return userRef;
}

export const createAuthUserFromEmailAndPassword = async (email, password) =>{
  if(!email || !password){
    return;
  }
  return await createUserWithEmailAndPassword(auth, email, password);
}


export const signInAuthUserFromEmailAndPassword = async (email, password) =>{
  if(!email || !password){
    return;
  }
  return await signInWithEmailAndPassword(auth, email, password);
}

export const passwordReset = async (email) => {
    return await sendPasswordResetEmail(auth, email)
  }

export const signOutAuthUser = async () => {signOut(auth)}

export const onAuthStateChangedListener = (callback) => 
{
  return onAuthStateChanged(auth, callback);
}