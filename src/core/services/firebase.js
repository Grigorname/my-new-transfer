import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDiq6G2T0DwLiZ7YxTH7W1WKjcyglko2p8",
  authDomain: "transferservice1991.firebaseapp.com",
  projectId: "transferservice1991",
  storageBucket: "transferservice1991.appspot.com",
  messagingSenderId: "981465369126",
  appId: "1:981465369126:web:cec1218ca73821039234e7",
  measurementId: "G-1J68FD951T",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
