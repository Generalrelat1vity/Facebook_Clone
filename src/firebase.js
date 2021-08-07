import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAQ_MchO_xKS2hk5v2Sgb33npDyCP0_7y4",
    authDomain: "facebook-clone-e88ac.firebaseapp.com",
    projectId: "facebook-clone-e88ac",
    storageBucket: "facebook-clone-e88ac.appspot.com",
    messagingSenderId: "910680106409",
    appId: "1:910680106409:web:ff9e96e1c7eb47eb9310b8",
    measurementId: "G-X4FVM33EKD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;