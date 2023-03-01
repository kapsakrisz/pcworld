import {initializeApp} from 'firebase/app';
import {getAuth,signInWithPopup,GoogleAuthProvider,}from 'firebase/auth'
import {getFirestore,getDoc,setDoc,doc} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDjDbPwTQu8jixae2XkZcvgzJfOtyZasH4",
    authDomain: "pcworld-ad358.firebaseapp.com",
    projectId: "pcworld-ad358",
    storageBucket: "pcworld-ad358.appspot.com",
    messagingSenderId: "899817151544",
    appId: "1:899817151544:web:64b7176fdc14bd3bc6dacd"
  };
  
  
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt:"select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () =>signInWithPopup(auth,provider);
  
  export const db = getFirestore();
  export const createUserDocumentFromAuth= async (userAuth) => {
const userDocRef = doc(db,'users',userAuth.uid);
console.log(userDocRef);
const userSnapshot = await getDoc(userDocRef);
console.log(userSnapshot);
console.log(userSnapshot.exists());

if (!userSnapshot.exists()) {
  const {displayName,email} =userAuth;
  const createAt = new Date();

  try {
    await setDoc(userDocRef,{
      displayName,
      email,
      createAt
    });
  } catch (error) {
    console.log('error creating the user',error.message);
  }
}
return userDocRef;
  };