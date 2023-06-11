import ImageThumb from '@components/ui/images/imageThumb/ImageThumb';
import PersonInfo from '@components/ui/personInfo/PersonInfo';
import { TranslationContext } from '@context/TranslationContext';
import { t } from '@lingui/macro';
import { useLingui } from '@lingui/react';
import { Box, Button, Typography, useTheme } from '@mui/material';
import {
	formatDate,
	getAge,
	getAgeBetweenTwoDate,
	truncate,
} from '@utils/index';
import { useContext, useState } from 'react';
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
	const { currentLocale } = useContext(TranslationContext);

	useLingui();

	const [viewMoreDescription, setViewMoreDescription] = useState(false);

	const getTruncateNumberWord = () => {
		if (width >= BreakpointEnum.XL) return 150;
		if (width >= BreakpointEnum.LG) return 100;
		if (width >= BreakpointEnum.MD) return 85;

		return 100;
	};

	const getDescriptionJSX = (
		<Box sx={{ ...styles.infoBox, ...styles.descriptionBox }}>
			<PersonInfo
				title={t`Description`}
				value={
					viewMoreDescription
						? (biography as string)
						: truncate(biography as string, getTruncateNumberWord())
				}
			/>

			{(biography as string)?.split(' ')?.length > getTruncateNumberWord() && (
				<Button
					sx={styles.viewMoreBtn}
					onClick={() => setViewMoreDescription(!viewMoreDescription)}
				>
					<Typography variant='body1' sx={styles.viewMoreTypo}>
						{!viewMoreDescription ? t`View more` : t`hide`}
					</Typography>
				</Button>
			)}
		</Box>
	);

	return (
		<Box sx={styles.detailsBox}>
			<Typography variant='h3' sx={styles.name}>
				{name}
			</Typography>

			<Box sx={styles.contentBox}>
				<ImageThumb
					src={profile_path as string}
					imageAlt={name as string}
					noImageBoxStyle={{ ...styles.poster, ...styles.noImageBox }}
					posterStyle={styles.poster}
					person
				/>

				<Box sx={styles.datasBox}>
					<Box sx={styles.infosBoxes}>
						<Box sx={styles.infoBox}>
							<PersonInfo
								title={t`Date of birth`}
								value={formatDate(birthday as string, currentLocale) as string}
								subValue={!deathday ? getAge(birthday as string) : null}
								subValueEnd='years old'
							/>
						</Box>

						{deathday && (
							<Box sx={styles.infoBox}>
								<PersonInfo
									title={t`Deathday`}
									value={
										formatDate(deathday as string, currentLocale) as string
									}
									subValue={getAgeBetweenTwoDate(
										birthday as string,
										deathday as string,
									)}
									subValueEnd='years old'
								/>
							</Box>
						)}

						<Box sx={styles.infoBox}>
							<PersonInfo
								title={t`Place of Birth`}
								value={place_of_birth as string}
							/>
						</Box>
					</Box>

					{(width < BreakpointEnum.SM || width >= BreakpointEnum.MD) &&
						getDescriptionJSX}
				</Box>
			</Box>
			{width >= BreakpointEnum.SM &&
				width < BreakpointEnum.MD &&
				getDescriptionJSX}
		</Box>
	);
};

export default DetailsPersonCard;
