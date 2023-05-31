import AuthMainContainer from '@components/containers/authMainContainer/AuthMainContainer';
import {
	Alert,
	Box,
	Button,
	TextField,
	Typography,
	useTheme,
} from '@mui/material';
import { signup } from '@services/auth';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormDatasRegisterType } from '../../../types';
import useStyles from './style';

const SignUp = () => {
	const theme = useTheme();
	const styles = useStyles(theme);
	const navigate = useNavigate();

	const [formDatas, setformData] = useState<FormDatasRegisterType>({
		email: '',
		password: '',
		passwordConfirm: '',
	});

	const [error, setError] = useState('');

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setformData({ ...formDatas, [e.target.name]: e.target.value });
	};

	const handleSubmit = () => {
		if (formDatas.password !== formDatas.passwordConfirm) {
			setError('Passwords do not match');
		} else {
			signup(formDatas.email, formDatas.password);

			setformData({
				email: '',
				password: '',
				passwordConfirm: '',
			});

			navigate('/login');
		}
	};

	return (
		<AuthMainContainer>
			<Box sx={styles.root}>
				<Typography variant='h2' sx={styles.title}>
					Register
				</Typography>

				{error && (
					<Alert variant='filled' severity='error'>
						{error}
					</Alert>
				)}

				<TextField
					onChange={handleChange}
					name='email'
					value={formDatas.email}
					placeholder={'enter your email...'}
				/>

				<TextField
					onChange={handleChange}
					name='password'
					value={formDatas.password}
					placeholder={'enter your password...'}
				/>

				<TextField
					onChange={handleChange}
					name='passwordConfirm'
					value={formDatas.passwordConfirm}
					placeholder={'enter your password comfirm...'}
				/>

				<Button sx={styles.btn} onClick={handleSubmit}>
					Submit
				</Button>
			</Box>
		</AuthMainContainer>
	);
};

export default SignUp;
