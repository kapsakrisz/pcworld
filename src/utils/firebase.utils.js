import {initializeApp} from 'firebase/app';
import {getAuth,signInWithPopup,signInWithRedirect,GoogleAuthProvider,}from 'firebase/auth'
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