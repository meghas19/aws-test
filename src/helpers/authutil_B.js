// @flow
import jwtDecode from 'jwt-decode';
import { Cookies } from 'react-cookie';
// import firebase from './firebase';

import * as firebase from 'firebase';

const firebaseConfig = {
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

firebase.firestore().settings({
    cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED,
});

firebase
    .firestore()
    .enablePersistence()
    .then((res) => {
        console.log('offline Mode Enabale');
    })
    .catch(function (err) {
        if (err.code === 'failed-precondition') {
            console.log(err);
        } else if (err.code === 'unimplemented') {
            console.log(err);
        }
    });

const db = firebase.firestore();

// import db from './firebase';

/**
 * Checks if user is authenticated
 */
const isUserAuthenticated = () => {
    const user = getLoggedInUser();
    console.log(user);
    if (!user || user === null) {
        return false;
    } else {
        console.log('here true');
        return true;
    }
    // const decoded = jwtDecode(user.token);
    // const currentTime = Date.now() / 1000;
    // if (decoded.exp > currentTime) {
    //     console.warn('access token expired');
    //     return false;
    // } else {
    //     return true;
    // }
};

/**
 * Returns the logged in user
 */
const getLoggedInUser = () => {
    const cookies = new Cookies();

    var user = null;

    console.log('username', localStorage.getItem('username'));

    if (localStorage.getItem('username') !== null && localStorage.getItem('uid') !== null) {
        var userName = localStorage.getItem('username');
        var uid = localStorage.getItem('uid');
        // console.log(username, uid);

        // const user = { username: 'username', uid: 'uid' };
        user = {
            id: uid,
            username: userName,
            password: 'test',
            firstName: 'Test',
            lastName: 'User',
            role: 'Admin',
        };
    } else {
        user = null;
    }

    // const user = null;

    return user ? (typeof user == 'object' ? user : JSON.parse(user)) : null;
};

const loginUserFireBase = async (email, password) => {
    console.log('sendData', email, password);
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log(firebase.auth().currentUser.uid);
        var Name = db.collection('users').doc(firebase.auth().currentUser.uid);
        console.log('Name', Name);
        localStorage.setItem('username', firebase.auth().currentUser.email);
        localStorage.setItem('uid', firebase.auth().currentUser.uid);
        localStorage.setItem('Name', firebase.auth().currentUser.uid);
        // var docRef = db.collection("cities").doc("SF");

        Name.get()
            .then(function (doc) {
                if (doc.exists) {
                    console.log('Document data:', doc.data());
                    localStorage.setItem('Name', doc.data().displayName);
                } else {
                    // doc.data() will be undefined in this case
                    console.log('No such document!');
                }
            })
            .catch(function (error) {
                console.log('Error getting document:', error);
            });
        setTimeout(() => {
            window.location.reload(false);
        }, 2000);
    } catch (err) {
        console.log(err);
        alert(err.message);
    }
};

const registerUserFirebase = async (email, password, displayName) => {
    console.log(email, password, displayName);
    try {
        let createdUser = await firebase.auth().createUserWithEmailAndPassword(email, password);
        // await createdUser.updateProfile({ displayName: displayName });
        console.log(createdUser);
        let newUser = {
            displayName,
            createdAt: Date.now(),
        };
        // const db = firebase.firestore();
        // db.set(`users/${createdUser.uid}`, { ...newUser });
        // db.collection("formData").doc()
        var dataTest = db.collection('users').doc(firebase.auth().currentUser.uid);

        dataTest.set({ ...newUser });
        alert('user created successfully');
        localStorage.setItem('username', firebase.auth().currentUser.email);
        localStorage.setItem('uid', firebase.auth().currentUser.uid);
        localStorage.setItem('Name', displayName);
        window.location.reload();
    } catch (error) {
        console.log('here');
        console.log(error);
        alert(error.message);
    }
};

export { isUserAuthenticated, getLoggedInUser, loginUserFireBase, registerUserFirebase };
