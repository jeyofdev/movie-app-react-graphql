import LoaderContainer from '@components/containers/LoaderContainer/LoaderContainer';
import BaseButton from '@components/ui/Button/BaseButton/BaseButton';
import AlertBase from '@components/ui/alert/Alert';
import Logo from '@components/ui/logo/Logo';
import { TranslationContext } from '@context/TranslationContext';
import {
	faCalendarCheck,
	faCircleArrowDown,
	faCircleArrowUp,
	faCirclePlay,
	faCompass,
	faMedal,
	faThumbsUp,
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
import SidebarResponsive from '../sideBarResponsive/SidebarResponsive';
import useStyles from './style';

const Sidebar = () => {
	const theme = useTheme();
	const styles = useStyles(theme);
	const { width } = useWindowSize();
	const { pathname } = useLocation();
	const { currentLocale, currentRegion } = useContext(TranslationContext);
	useLingui();

	const newsFeedItems: MenuItemType[] = [
		{
			id: uuidv4(),
			value: 'browse',
			name: t`browse`,
			icon: faCompass,
			link: RoutesEnum.MOVIES_LIST,
		},
		{
			id: uuidv4(),
			value: 'upcoming',
			name: t`upcoming`,
			icon: faCalendarCheck,
			link: RoutesEnum.MOVIES_UPCOMING,
		},
		{
			id: uuidv4(),
			value: 'popular',
			name: t`popular`,
			icon: faThumbsUp,
			link: RoutesEnum.MOVIES_POPULAR,
		},
		{
			id: uuidv4(),
			value: 'top rated',
			name: t`top rated`,
			icon: faMedal,
			link: RoutesEnum.MOVIES_TOP_RATED,
		},
		{
			id: uuidv4(),
			value: 'now playing',
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
		loading: loadingGenres,
		error: errorGenres,
	} = useGenresQuery({
		variables: {
			options: {
				language: currentLocale,
				region: currentRegion,
			},
		},
		fetchPolicy: 'no-cache',
		onCompleted(data) {
			setGenresItems(
				data?.genres?.genres
					? (data?.genres?.genres.slice(0, 5) as Array<Genre>)
					: [],
			);
		},
	});

	const { data, loading, error } = useGenresQuery({
		variables: {
			options: {
				language: currentLocale,
				region: currentRegion,
			},
		},
		fetchPolicy: 'no-cache',
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
			setMenuItemActive('browse');
		} else if (pathnameSplit[1] === 'search') {
			setMenuItemActive('');
		}
	}, [pathname]);

	useEffect(() => {
		if (!showAllGenres) {
			setGenresItems(
				dataGenres?.genres?.genres
					? (dataGenres?.genres?.genres
							.filter(genre => genre?.id !== 99)
							.slice(0, 5) as Array<Genre>)
					: [],
			);
		} else {
			setGenresItems(
				dataGenres?.genres?.genres
					? (dataGenres?.genres?.genres.filter(
							genre => genre?.id !== 99,
					  ) as Array<Genre>)
					: [],
			);
		}
	}, [dataGenres?.genres?.genres, showAllGenres]);

	if (loading || loadingGenres) {
		return <LoaderContainer />;
	}

	if (error || errorGenres) {
		return (
			<AlertBase>
				<Trans>An error has occurred !!!</Trans>
			</AlertBase>
		);
	}

	return (
		<Box sx={styles.root}>
			{width >= BreakpointEnum.SM ? (
				<>
					<Logo />

					<MenuItemsBlock
						title={t`News Feed`}
						menuItems={newsFeedItems}
						menuItemActive={menuItemActive as string}
						setMenuItemActive={setMenuItemActive}
						setCloseMenuMobile={() => {}}
					/>

					<Divider sx={styles.divider} />

					<MenuItemsBlock
						title={t`Genres`}
						menuItems={genresItems}
						menuItemsOriginal={data?.genres?.genres as Array<Genre>}
						menuItemActive={menuItemActive as string}
						setMenuItemActive={setMenuItemActive}
						isGenre
						setCloseMenuMobile={() => {}}
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
				<SidebarResponsive
					menuItems={newsFeedItems}
					menuItemActive={menuItemActive as string}
					setMenuItemActive={setMenuItemActive}
				/>
			)}
		</Box>
	);
};

export default Sidebar;
