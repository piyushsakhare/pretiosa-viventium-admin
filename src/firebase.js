import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCwSkR2zWFbmkgUhiCwdsYxhnm5JSwFx1E",
    authDomain: "pretiosa-viventium.firebaseapp.com",
    projectId: "pretiosa-viventium",
    storageBucket: "pretiosa-viventium.appspot.com",
    messagingSenderId: "421035630514",
    appId: "1:421035630514:web:c6a52a91fc848e525f0eab",
    measurementId: "G-YXKWRMF4D2"
  };

initializeApp(firebaseConfig)

const storage = getStorage()

export default storage