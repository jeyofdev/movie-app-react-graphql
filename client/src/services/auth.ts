/* eslint-disable no-console */
import {
	GithubAuthProvider,
	GoogleAuthProvider,
	signInWithPopup,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { auth } from './firebase';

export const socialMediaAuth = (
	provider: GoogleAuthProvider | GithubAuthProvider,
) =>
	signInWithPopup(auth, provider)
		.then(res => res.user)
		.catch(err => {
			console.log(err.message);
		});

export const logOut = () => {
	signOut(auth)
		.then(() => {
			console.log('logged out');
		})
		.catch(error => {
			console.log(error.message);
		});
};

export const signUp = (email: string, password: string) =>
	createUserWithEmailAndPassword(auth, email, password)
		.then(res => res.user)
		.catch(err => {
			console.log(err.message);
		});

export const signIn = (email: string, password: string) =>
	signInWithEmailAndPassword(auth, email, password)
		.then(res => res.user)
		.catch(err => {
			console.log(err.message);
		});
