import { Box, Button, Typography, useTheme } from '@mui/material';
import { logOut, socialMediaAuth } from '@services/auth';
import { githubProvider, googleProvider } from '@services/auth.providers';
import { auth } from '@services/firebase';
import { GoogleAuthProvider } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import useStyles from './style';

const Login = () => {
	const theme = useTheme();
	const styles = useStyles(theme);

	const [user] = useAuthState(auth);

	const handleLogin = async (provider: GoogleAuthProvider) => {
		await socialMediaAuth(provider);
	};

	if (user) {
		return (
			<>
				<h1>{user.displayName} is connected</h1>
				<Button sx={styles.logout} onClick={logOut}>
					logout
				</Button>
			</>
		);
	}

	return (
		<Box sx={styles.root}>
			<Typography variant='h2' sx={styles.title}>
				Login
			</Typography>

			<Button sx={styles.loginBtn} onClick={() => handleLogin(googleProvider)}>
				Google
			</Button>

			<Button sx={styles.loginBtn} onClick={() => handleLogin(githubProvider)}>
				Github
			</Button>
		</Box>
	);
};

export default Login;
