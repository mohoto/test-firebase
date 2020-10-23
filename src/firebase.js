  import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAR4M-pfj0DG8LEsexNrKHkBycLEBH2unA",
        authDomain: "app-test-a1a35.firebaseapp.com",
        databaseURL: "https://app-test-a1a35.firebaseio.com",
        projectId: "app-test-a1a35",
        storageBucket: "app-test-a1a35.appspot.com",
        messagingSenderId: "823628415021",
        appId: "1:823628415021:web:8543ae286f9047efcf78a4"
  });

  const db = firebaseApp.firestore();

export default db;