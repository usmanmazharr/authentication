// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADaWVSfOCRBjY6cw2nVuF8X8hEbNtdU6w",
  authDomain: "fir-authentication-9eba6.firebaseapp.com",
  projectId: "fir-authentication-9eba6",
  storageBucket: "fir-authentication-9eba6.appspot.com",
  messagingSenderId: "862333567790",
  appId: "1:862333567790:web:a4c86f7f13e80c5290b0bf"
};

// Initialize Firebase

let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}

else {
    app = firebase.app();
}


const auth = firebase.auth();
export {auth};