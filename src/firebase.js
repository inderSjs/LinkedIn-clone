import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCjM870PvCm0ckqg-dAqajiHjmfltYqxpA",
    authDomain: "linkedin-clone-yt-c83e1.firebaseapp.com",
    projectId: "linkedin-clone-yt-c83e1",
    storageBucket: "linkedin-clone-yt-c83e1.appspot.com",
    messagingSenderId: "473999264556",
    appId: "1:473999264556:web:a46fcd219c760c598c7a89"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };