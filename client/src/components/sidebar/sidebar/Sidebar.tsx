import {
	faCalendarCheck,
	faCompass,
	faFilm,
	faRectangleList,
	faTicket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Genre, useGenresQuery } from '@graphql/__generated__/graphql-type';
import useWindowSize from '@hooks/useWindowSize';
import { Box, Divider, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BreakpointEnum } from '../../../types/enums';
import { MenuItemType } from '../../../types/types/props';
import MenuItemsBlock from '../menuItemsBlock/MenuItemsBlock';
import useStyles from './style';

const newsFeedItems: MenuItemType[] = [
	{ id: uuidv4(), name: 'browse', icon: faCompass, link: '/home' },
	{
		id: uuidv4(),
		name: 'coming soon',
		icon: faCalendarCheck,
		link: '/movies/upcoming',
	},
	{ id: uuidv4(), name: 'playlist', icon: faRectangleList, link: '/playlist' },
	{ id: uuidv4(), name: 'videos', icon: faFilm, link: '/video' },
];

const Sidebar = () => {
	const theme = useTheme();
	const styles = useStyles(theme);
	const { width } = useWindowSize();

	const [menuItemActive, setMenuItemActive] = useState<string | number>(
		newsFeedItems[0]?.id,
	);
	const [genresItems, setGenresItems] = useState<Array<Genre>>([]);
	const { loading, error } = useGenresQuery({
		onCompleted(data) {
			setGenresItems(
				data?.genres?.genres
					? (data?.genres?.genres.slice(0, 5) as Array<Genre>)
					: [],
			);
		},
	});

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
							Movies
						</Typography>
					</Box>

					<MenuItemsBlock
						title='News Feed'
						menuItems={newsFeedItems}
						menuItemActive={menuItemActive}
						setMenuItemActive={setMenuItemActive}
					/>

					<Divider sx={styles.divider} />

					<MenuItemsBlock
						title='Genres'
						menuItems={genresItems}
						menuItemActive={menuItemActive}
						setMenuItemActive={setMenuItemActive}
						isGenre
					/>

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
							menuItemActive={menuItemActive}
							setMenuItemActive={setMenuItemActive}
						/>
					</Box>
				</>
			)}
		</Box>
	);
};

export default Sidebar;
