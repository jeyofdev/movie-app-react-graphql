import BaseButton from '@components/ui/Button/BaseButton/BaseButton';
import { TranslationContext } from '@context/TranslationContext';
import {
	faCalendarCheck,
	faCircleArrowDown,
	faCircleArrowUp,
	faCirclePlay,
	faCompass,
	faMedal,
	faThumbsUp,
	faTicket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Genre, useGenresQuery } from '@graphql/__generated__/graphql-type';
import useWindowSize from '@hooks/useWindowSize';
import { Trans, t } from '@lingui/macro';
import { useLingui } from '@lingui/react';
import { Box, Divider, Typography, useTheme } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { BreakpointEnum, RoutesEnum } from '../../../types/enums';
import { MenuItemType } from '../../../types/types/props';
import MenuItemsBlock from '../menuItemsBlock/MenuItemsBlock';
import useStyles from './style';

const Sidebar = () => {
	const theme = useTheme();
	const styles = useStyles(theme);
	const { width } = useWindowSize();
	const { pathname } = useLocation();
	const { currentLocale } = useContext(TranslationContext);
	useLingui();

	const newsFeedItems: MenuItemType[] = [
		{ id: uuidv4(), name: t`browse`, icon: faCompass, link: RoutesEnum.ROOT },
		{
			id: uuidv4(),
			name: t`upcoming`,
			icon: faCalendarCheck,
			link: RoutesEnum.MOVIES_UPCOMING,
		},
		{
			id: uuidv4(),
			name: t`popular`,
			icon: faThumbsUp,
			link: RoutesEnum.MOVIES_POPULAR,
		},
		{
			id: uuidv4(),
			name: t`top rated`,
			icon: faMedal,
			link: RoutesEnum.MOVIES_TOP_RATED,
		},
		{
			id: uuidv4(),
			name: t`now playing`,
			icon: faCirclePlay,
			link: RoutesEnum.MOVIES_NOW_PLAYING,
		},
	];

	const [menuItemActive, setMenuItemActive] = useState<string | null>('');

	const [showAllGenres, setShowAllGenres] = useState<boolean>(false);
	const [genresItems, setGenresItems] = useState<Array<Genre>>([]);
	const {
		data: dataGenres,
		loading,
		error,
	} = useGenresQuery({
		variables: {
			options: {
				language: currentLocale,
			},
		},
		fetchPolicy: 'cache-and-network',
		onCompleted(data) {
			setGenresItems(
				data?.genres?.genres
					? (data?.genres?.genres.slice(0, 5) as Array<Genre>)
					: [],
			);
		},
	});

	const handleClickShowAllGenres = () => {
		setShowAllGenres(!showAllGenres);
	};

	useEffect(() => {
		const pathnameSplit = pathname?.split('/');

		if (pathnameSplit?.length === 4) {
			setMenuItemActive(pathnameSplit[3]?.toLowerCase());
		} else if (pathnameSplit?.length === 3) {
			setMenuItemActive(pathnameSplit[2]?.toLowerCase());
		} else if (pathnameSplit?.length === 2) {
			setMenuItemActive(t`browse`);
		} else if (pathnameSplit[1] === 'search') {
			setMenuItemActive('');
		}
	}, [pathname]);

	useEffect(() => {
		if (!showAllGenres) {
			setGenresItems(
				dataGenres?.genres?.genres
					? (dataGenres?.genres?.genres.slice(0, 5) as Array<Genre>)
					: [],
			);
		} else {
			setGenresItems(
				dataGenres?.genres?.genres
					? (dataGenres?.genres?.genres as Array<Genre>)
					: [],
			);
		}
	}, [dataGenres?.genres?.genres, showAllGenres]);

	if (loading) {
		return <Box>Loading...</Box>;
	}

	if (error) {
		return <Box>{error.message}</Box>;
	}

	return (
		<Box sx={styles.root}>
			{width >= BreakpointEnum.SM ? (
				<>
					<Box sx={styles.topContentBox}>
						<FontAwesomeIcon
							icon={faTicket}
							color={theme.palette.primary.main}
							style={styles.topIcon}
						/>
						<Typography variant='h4' sx={styles.topTitle}>
							<Trans>Movies</Trans>
						</Typography>
					</Box>

					<MenuItemsBlock
						title={t`News Feed`}
						menuItems={newsFeedItems}
						menuItemActive={menuItemActive as string}
						setMenuItemActive={setMenuItemActive}
					/>

					<Divider sx={styles.divider} />

					<MenuItemsBlock
						title={t`Genres`}
						menuItems={genresItems}
						menuItemActive={menuItemActive as string}
						setMenuItemActive={setMenuItemActive}
						isGenre
					/>

					<BaseButton
						onClick={handleClickShowAllGenres}
						disableRipple={true}
						style={styles.showAllGenresBtn}
					>
						<FontAwesomeIcon
							icon={!showAllGenres ? faCircleArrowDown : faCircleArrowUp}
							style={styles.showAllGenresIcon}
						/>
						<Typography variant='body1' sx={styles.showAllGenresTypo}>
							{!showAllGenres ? t`show more` : t`hide`}
						</Typography>
					</BaseButton>

					<Divider sx={styles.divider} />
				</>
			) : (
				<>
					<Divider sx={styles.divider} />
					<Box sx={styles.root}>
						<MenuItemsBlock
							mobile
							title='News Feed'
							menuItems={newsFeedItems}
							menuItemActive={menuItemActive as string}
							setMenuItemActive={setMenuItemActive}
						/>
					</Box>
				</>
			)}
		</Box>
	);
};

export default Sidebar;
