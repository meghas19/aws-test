import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: 'AIzaSyCnB6bVU3l1o6NSim96hYMqVYQXT8p-1ek',
    authDomain: 'stet-d84bf.firebaseapp.com',
    databaseURL: 'https://stet-d84bf.firebaseio.com',
    projectId: 'stet-d84bf',
    storageBucket: 'stet-d84bf.appspot.com',
    messagingSenderId: '851022538939',
    appId: '1:851022538939:web:6314530885f6b6dadb619e',
    measurementId: 'G-9SNP6LVLN7',
};

firebase.initializeApp(firebaseConfig);

/** Requires timestamp settings for later versions of firebase */

export default firebase;
