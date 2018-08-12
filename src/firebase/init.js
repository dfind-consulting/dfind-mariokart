import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBlF99JLlFczABgiou6bEVcFcLfoUju1aI',
  authDomain: 'dfind-mariokart.firebaseapp.com',
  databaseURL: 'https://dfind-mariokart.firebaseio.com',
  projectId: 'dfind-mariokart',
  storageBucket: 'dfind-mariokart.appspot.com',
  messagingSenderId: '1016715788619',
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();

