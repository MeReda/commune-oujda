import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBDRanvMAdiUtuT7RSnL82Oi0Vjl9CdRnQ',
	authDomain: 'commune-auth.firebaseapp.com',
	projectId: 'commune-auth',
	storageBucket: 'commune-auth.appspot.com',
	messagingSenderId: '59218812744',
	appId: '1:59218812744:web:2cc7d9569e73aa4a825d7d',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
