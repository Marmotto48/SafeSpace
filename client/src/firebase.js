import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyCPZrnMgoGF_IOaOEEw-w6lvLX_T30Ak0U",
  authDomain: "safe-space-fcfcf.firebaseapp.com",
  projectId: "safe-space-fcfcf",
  storageBucket: "safe-space-fcfcf.appspot.com",
  messagingSenderId: "290999894926",
  appId: "1:290999894926:web:60d240605468c884035adf",
  measurementId: "G-8T1NHE5WXE",
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;
