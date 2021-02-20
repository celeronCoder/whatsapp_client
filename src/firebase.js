import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD-d1l-y0tJchzt-2c9cME2VbAcrBx9xUw",
    authDomain: "mern-whatsapp-clone-30882.firebaseapp.com",
    projectId: "mern-whatsapp-clone-30882",
    storageBucket: "mern-whatsapp-clone-30882.appspot.com",
    messagingSenderId: "595024926561",
    appId: "1:595024926561:web:6d6e7758c75747dbbb5720",
    measurementId: "G-5E9QF0KVNT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const GoogleAuth = new firebase.auth.GoogleAuthProvider();
const EmailAuth = new firebase.auth.EmailAuthProvider();

export { auth, GoogleAuth, EmailAuth };
