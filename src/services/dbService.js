
import firebase from 'firebase/app';
import 'firebase/firestore';

let db;

function initializeFirebaseApp() {
	firebase.initializeApp({
        apiKey: "AIzaSyBaDOKP7A5-cHnjxXz7sOhOsfps1GTbbIQ",
        authDomain: "deg-foundational-js.firebaseapp.com",
        databaseURL: "https://deg-foundational-js.firebaseio.com",
        projectId: "deg-foundational-js",
        storageBucket: "deg-foundational-js.appspot.com",
        messagingSenderId: "58232227516"
	});
	db = firebase.firestore();
	const settings = {timestampsInSnapshots: true};
	db.settings(settings);
}

function getDB() {
	return db;
}

export default {
	initializeFirebaseApp,
	getDB
};