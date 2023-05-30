import { usePersonDetailsQuery } from '@graphql/__generated__/graphql-type';
import { Box, Typography, useTheme } from '@mui/material';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useStyles from './style';

const Person = () => {
	const theme = useTheme();
	const styles = useStyles(theme);
	const { personId } = useParams();

	const { loading, error, data } = usePersonDetailsQuery({
		variables: {
			personId: Number(personId),
		},
	});

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// eslint-disable-next-line no-console
	console.log(loading, error, data);

	return (
		<Box>
			<Typography variant='h3' sx={styles.name}>
				{data?.personDetails?.name}
			</Typography>
		</Box>
	);
};

export default Person;
