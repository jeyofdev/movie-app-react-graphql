import HomeCard from '@components/cards/homeCard/HomeCard';
import SignInModal from '@components/modals/signInModal/SignInModal';
import SignUpModal from '@components/modals/signupModal/SignUpModal';
import { Movie } from '@graphql/__generated__/graphql-type';
import useTheme from '@hooks/useTheme';
import { Trans, t } from '@lingui/macro';
import { Box, Button, Typography } from '@mui/material';
import { auth } from '@services/firebase';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { RoutesEnum } from '../../types/enums';
import { HomePropsType } from '../../types/types/props';
import useStyles from './style';

const Home = ({ list }: HomePropsType) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);
	const navigate = useNavigate();
	const [user] = useAuthState(auth);

	const [showModalSignUp, setShowModalSignUp] = useState<boolean>(false);
	const [showModalSignIn, setShowModalSignIn] = useState<boolean>(false);
	const [signInStep, setSignInStep] = useState<number>(0);
	const [logInStep, setLogInStep] = useState<number>(0);

	const getStyleCard = (i: number) => {
		switch (i) {
			case 0:
				return styles.cardBoxOne;

			case 1:
				return styles.cardBoxTwo;

			case 2:
				return styles.cardBoxThree;

			default:
				return null;
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Box sx={styles.root}>
			<Box>
				<Box sx={styles.imagesBox}>
					{list?.slice(1, 4)?.map((movie: Movie, i: number) => (
						<HomeCard
							key={movie?.id}
							poster_path={movie?.poster_path}
							boxStyles={{ ...styles.cardBox, ...getStyleCard(i) }}
						/>
					))}
				</Box>

				<Box sx={styles.typoBox}>
					<Typography variant='h5' sx={styles.typoContent}>
						<Trans>
							Welcome to our site dedicated to the latest cinematic releases!
							Our platform brings together all the essential information about
							the latest and most popular movies
						</Trans>
					</Typography>
				</Box>
				<Box sx={styles.btnsBox}>
					{!user ? (
						<>
							<Button
								variant='outlined'
								disableFocusRipple
								disableRipple
								sx={styles.btn}
								onClick={() => {
									setShowModalSignIn(true);
									setLogInStep(1);
								}}
							>
								<Typography variant='h6'>
									<Trans>Login</Trans>
								</Typography>
							</Button>

							<Button
								variant='contained'
								disableFocusRipple
								disableRipple
								sx={{ ...styles.btn, ...styles.btnContained }}
								onClick={() => {
									setShowModalSignUp(true);
									setSignInStep(1);
								}}
							>
								<Typography variant='h6'>
									<Trans>Sign up</Trans>
								</Typography>
							</Button>
						</>
					) : (
						<Button
							variant='contained'
							sx={{ ...styles.btn, ...styles.btnContained }}
							disableFocusRipple
							disableRipple
							onClick={() => navigate(RoutesEnum.MOVIES_LIST)}
						>
							<Typography variant='h6'>
								<Trans>Getting started</Trans>
							</Typography>
						</Button>
					)}
				</Box>
			</Box>

			<SignUpModal
				open={showModalSignUp}
				setOpen={setShowModalSignUp}
				step={signInStep}
				setStep={setSignInStep}
				title={{
					stepOne: t`Sign up`,
					stepTwo: t`Finish Signing up`,
				}}
				onRedirect={() => {
					setShowModalSignIn(true);
					setShowModalSignUp(false);
				}}
			/>

			<SignInModal
				open={showModalSignIn}
				setOpen={setShowModalSignIn}
				step={logInStep}
				setStep={setLogInStep}
				title={{
					stepOne: t`Login`,
					stepTwo: t`Forgot your password ?`,
				}}
				onRedirect={() => {
					setShowModalSignUp(true);
					setShowModalSignIn(false);
				}}
			/>
		</Box>
	);
};

export default Home;
