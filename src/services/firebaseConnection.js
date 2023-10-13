
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBBgygPDw_HpjdAHilA7JbBQhdy7PHCYio",
    authDomain: "tickets-73330.firebaseapp.com",
    projectId: "tickets-73330",
    storageBucket: "tickets-73330.appspot.com",
    messagingSenderId: "124662120098",
    appId: "1:124662120098:web:e30ec5eb7bdac25ce1e1fb",
    measurementId: "G-BR4GY1NRLK"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);

  export{ auth, db, storage}; 