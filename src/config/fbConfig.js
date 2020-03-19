import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBE9pWmIPacIvuzAaPaZIjxq8Aw1QgnNec",
    authDomain: "workflow-71d0c.firebaseapp.com",
    databaseURL: "https://workflow-71d0c.firebaseio.com",
    projectId: "workflow-71d0c",
    storageBucket: "workflow-71d0c.appspot.com",
    messagingSenderId: "305400603584",
    appId: "1:305400603584:web:25c60ecd0ea35845a91e25",
    measurementId: "G-74VZZS5B0Z"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;