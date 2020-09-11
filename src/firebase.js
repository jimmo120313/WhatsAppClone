import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDGKclXDzbVc70wZ90bs57ZGv5Gq_IPiZo",
    authDomain: "whats-app-clone-24ff4.firebaseapp.com",
    databaseURL: "https://whats-app-clone-24ff4.firebaseio.com",
    projectId: "whats-app-clone-24ff4",
    storageBucket: "whats-app-clone-24ff4.appspot.com",
    messagingSenderId: "227829776309",
    appId: "1:227829776309:web:19e1905d22bef66cbde3fc",
    measurementId: "G-ZYVCBR7R05"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{auth, provider};
  export default db;