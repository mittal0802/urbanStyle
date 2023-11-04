import { initializeApp } from "firebase/app";
import {
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
  getAuth,
  signOut,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  query,
  getDocs,
  writeBatch,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBR9rf21kw5ZhtXe1JxD1uCW9k7PzjdydQ",
  authDomain: "urbanstyle-db.firebaseapp.com",
  projectId: "urbanstyle-db",
  storageBucket: "urbanstyle-db.appspot.com",
  messagingSenderId: "943971658225",
  appId: "1:943971658225:web:0960da07f376deb1eebc50",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

//auth
export const auth = getAuth(firebaseApp);
setPersistence(auth, browserSessionPersistence);
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

//firestore
export const db = getFirestore();

//adding some new collection as well as documents in that collection
//collection key is the name of the collection
//objectsToAdd is the array of objects that we want to add to the collection
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  //just like doc we have collectionRef
  const collectionRef = collection(db, collectionKey);

  //batch is used to batch all the set calls together
  const batch = writeBatch(db);

  //loop through the objectsToAdd array and batch all the set calls together
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());

    //set the document reference with the object
    batch.set(docRef, object);
  });

  //commit the batch
  await batch.commit();
  console.log("batch committed");
};

export const getCategoriesAndCollections = async () => {
  //get the collection reference
  const collectionRef = collection(db, "categories");

  //get the query reference
  const q = query(collectionRef);

  // get the query snapshot
  const querySnapshot = await getDocs(q);
  //get the category map from the query snapshot
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

export const UpdateDocument = async (
  collectionName,
  documentName,
  updateObject
) => {
  const documentRef = doc(db, collectionName, documentName);
  await updateDoc(documentRef, updateObject);
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) {
    return;
  }
  const userRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userRef);

  //if user data does not exist in the database, create it
  //set the user data in the database from userAuth
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const cartItems = [];
    const orders = [];
    const createdAt = new Date();
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        cartItems,
        orders,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userRef;
};

export const getUserCartItems = async (collectionName, userId) => {
  const documentRef = doc(db, collectionName, userId);
  const documentSnapshot = await getDoc(documentRef);
  if (documentSnapshot.exists()) return documentSnapshot.data().cartItems;
  else return [];
};

export const getUserOrders = async (collectionName, userId) => {
  const documentRef = doc(db, collectionName, userId);
  const documentSnapshot = await getDoc(documentRef);
  if (documentSnapshot.exists()) return documentSnapshot.data().orders;
  else return [];
};

export const createAuthUserFromEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserFromEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  return await signInWithEmailAndPassword(auth, email, password);
};

export const passwordReset = async (email) => {
  return await sendPasswordResetEmail(auth, email);
};

export const signOutAuthUser = async () => {
  signOut(auth);
};

export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};
/**
 *
 * onAuthStateChanged(auth, callback, error, completed)
 * next: callback
 * error: errorcallback
 * completed: completecallback
 */
