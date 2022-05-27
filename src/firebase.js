import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANPnd0i7v142F11JBK83-VpEVxo6jj6vc",
  authDomain: "houseofrefuge-c1e94.firebaseapp.com",
  projectId: "houseofrefuge-c1e94",
  storageBucket: "houseofrefuge-c1e94.appspot.com",
  messagingSenderId: "609438602729",
  appId: "1:609438602729:web:94b9b976830e872fb1a778",
  measurementId: "G-0R84KL9VML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore();