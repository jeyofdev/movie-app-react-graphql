import ImageThumb from '@components/ui/images/imageThumb/ImageThumb';
import PersonInfo from '@components/ui/personInfo/PersonInfo';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { getAge, getAgeBetweenTwoDate, truncate } from '@utils/index';
import { useState } from 'react';
import { useWindowSize } from 'usehooks-ts';
import { BreakpointEnum } from '../../../types/enums';
import { DetailsPersonCardPropsType } from '../../../types/types/props';
import useStyles from './style';

const DetailsPersonCard = ({
	name,
	profile_path,
	birthday,
	deathday,
	place_of_birth,
	biography,
}: DetailsPersonCardPropsType) => {
	const theme = useTheme();
	const styles = useStyles(theme);
	const { width } = useWindowSize();

	const [viewMoreDescription, setViewMoreDescription] = useState(false);

	const getTruncateNumberWord = () => {
		if (width >= BreakpointEnum.XL) return 150;
		if (width >= BreakpointEnum.LG) return 100;
		if (width >= BreakpointEnum.MD) return 85;

		return 100;
	};

	return (
		<>
			<Box sx={styles.nameBox}>
				<Typography variant='h3' sx={styles.name}>
					{name}
				</Typography>
			</Box>

			<ImageThumb
				src={profile_path as string}
				imageAlt={name as string}
				noImageBoxStyle={{ ...styles.poster, ...styles.noImageBox }}
				posterStyle={styles.poster}
				person
			/>

			{birthday && (
				<Box sx={{ ...styles.infoBox, ...styles.birthdayBox }}>
					<PersonInfo
						title='Birthday'
						value={birthday as string}
						subValue={!deathday ? getAge(birthday as string) : null}
						subValueEnd='years old'
					/>
				</Box>
			)}

			{deathday && (
				<Box sx={{ ...styles.infoBox, ...styles.deathdayBox }}>
					{deathday && (
						<PersonInfo
							title='Deathday'
							value={deathday as string}
							subValue={
								deathday &&
								getAgeBetweenTwoDate(birthday as string, deathday as string)
							}
							subValueEnd='years old'
						/>
					)}
				</Box>
			)}

			{place_of_birth && (
				<Box sx={{ ...styles.infoBox, ...styles.placeBirthBox }}>
					<PersonInfo title='Place of Birth' value={place_of_birth as string} />
				</Box>
			)}

			{biography && (
				<Box sx={{ ...styles.infoBox, ...styles.descriptionBox }}>
					<PersonInfo
						title='Description'
						value={
							viewMoreDescription
								? (biography as string)
								: truncate(biography as string, getTruncateNumberWord())
						}
					/>

					{(biography as string)?.split(' ')?.length >
						getTruncateNumberWord() && (
						<Button
							sx={styles.viewMoreBtn}
							onClick={() => setViewMoreDescription(!viewMoreDescription)}
						>
							<Typography variant='body1' sx={styles.viewMoreTypo}>
								{!viewMoreDescription ? 'View more' : 'hide'}
							</Typography>
						</Button>
					)}
				</Box>
			)}
		</>
	);
};

export default DetailsPersonCard;
