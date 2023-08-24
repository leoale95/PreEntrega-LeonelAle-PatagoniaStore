import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDU0Js1HV4tgkEJvosX7BhXKtlAVbkC9gk",
  authDomain: "patagonia-store-c2e81.firebaseapp.com",
  projectId: "patagonia-store-c2e81",
  storageBucket: "patagonia-store-c2e81.appspot.com",
  messagingSenderId: "1094674937990",
  appId: "1:1094674937990:web:49030804e732ace09bf907"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)