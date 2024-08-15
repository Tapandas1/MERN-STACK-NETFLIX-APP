import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCyQbC5vh8u8eJ3FBHQF6ovNCY_qyBA0PI",
  authDomain: "netflix-c723e.firebaseapp.com",
  projectId: "netflix-c723e",
  storageBucket: "netflix-c723e.appspot.com",
  messagingSenderId: "196722258503",
  appId: "1:196722258503:web:cc8c4231c351b5d154b762",
  measurementId: "G-4NMZL4SGFE"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app); 
export { storage }; 