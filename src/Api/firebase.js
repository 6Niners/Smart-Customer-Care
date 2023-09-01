import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
} = process.env;

const firebaseConfig = {
  apiKey: "AIzaSyD6HQPfo8V0V_BRwJx6MNMeq58u_MOHkSQ",
  authDomain: "smartcc-960f7.firebaseapp.com",
  projectId: "smartcc-960f7",
  storageBucket: "smartcc-960f7.appspot.com",
  messagingSenderId: "857055861649",
  appId: "1:857055861649:web:9e7060fd259d56e1815830",
  measurementId: "G-N25P91NF69"
};


const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export default firestoreDB