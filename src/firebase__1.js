import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDXPtZdGY_iICmPZ4UOKDwLxqYTNWhnQzk",
    authDomain: "sihstet-36a42.firebaseapp.com",
    databaseURL: "https://sihstet-36a42.firebaseio.com",
    projectId: "sihstet-36a42",
    storageBucket: "sihstet-36a42.appspot.com",
    messagingSenderId: "519285942788",
    appId: "1:519285942788:web:fa54eda328a1333d8be351",
    measurementId: "G-75XHMDRMNQ"
};

firebase.initializeApp(firebaseConfig);
export default firebase;