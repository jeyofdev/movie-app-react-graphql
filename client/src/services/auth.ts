/* eslint-disable no-console */
import {
	GithubAuthProvider,
	GoogleAuthProvider,
	signInWithPopup,
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
	auth
		.signOut()
		.then(() => {
			console.log('logged out');
		})
		.catch(error => {
			console.log(error.message);
		});
};
