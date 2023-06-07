/* eslint-disable no-console */
import {
	GithubAuthProvider,
	GoogleAuthProvider,
	signInWithPopup,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	sendPasswordResetEmail,
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
	createUserWithEmailAndPassword(auth, email, password);

export const signIn = (email: string, password: string) =>
	signInWithEmailAndPassword(auth, email, password);

export const forgotPassword = (email: string) =>
	sendPasswordResetEmail(auth, email);

export const authErrorCredentials = (errorCode: string) =>
	errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password';
