import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC2r-t_O5_T51dNJGL9VIPqUQGz_E3IKFE",
  authDomain: "alternativa-89-7.firebaseapp.com",
  projectId: "alternativa-89-7",
  storageBucket: "alternativa-89-7.appspot.com",
  messagingSenderId: "955449882803",
  appId: "1:955449882803:web:4c11e495784ec162ba18c6",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage(app);

export { db, storage };
