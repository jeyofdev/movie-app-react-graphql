import MenuItem from '@components/items/MenuItem/MenuItem';
import {
	faCalendarCheck,
	faCompass,
	faFilm,
	faRectangleList,
	faTicket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Genre, useGenresQuery } from '@graphql/__generated__/graphql-type';
import { Box, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MenuItemType } from '../../../types/types/props';
import useStyles from './style';

const newsFeedItems: MenuItemType[] = [
	{ id: uuidv4(), label: 'browse', icon: faCompass, link: '/home' },
	{
		id: uuidv4(),
		label: 'coming soon',
		icon: faCalendarCheck,
		link: '/coming-soon',
	},
	{ id: uuidv4(), label: 'playlist', icon: faRectangleList, link: '/playlist' },
	{ id: uuidv4(), label: 'videos', icon: faFilm, link: '/video' },
];

const Sidebar = () => {
	const theme = useTheme();
	const styles = useStyles(theme);
	const [menuItemActive, setMenuItemActive] = useState<string | number>(
		newsFeedItems[0]?.id,
	);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [genresItems, setGenresItems] = useState<any>([]);
	const { loading, error } = useGenresQuery({
		onCompleted(data) {
			setGenresItems(data?.genres?.genres?.slice(0, 5));
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
			<Box sx={styles.topContentBox}>
				<FontAwesomeIcon
					icon={faTicket}
					size='2x'
					color={theme.palette.primary.main}
				/>
				<Typography variant='h4' sx={styles.topTitle}>
					Movies
				</Typography>
			</Box>

			<Box sx={styles.menuItemsBox}>
				<Typography variant='h6' sx={styles.menuItemsBlockTitle}>
					News Feed
				</Typography>
				{newsFeedItems.map(newsFeedItem => (
					<MenuItem
						key={newsFeedItem?.label}
						id={newsFeedItem?.id}
						label={newsFeedItem?.label}
						icon={newsFeedItem?.icon}
						link={newsFeedItem?.link}
						active={menuItemActive === newsFeedItem?.id}
						setMenuItemActive={setMenuItemActive}
					/>
				))}

				<hr
					style={{
						height: '0.5px',
						width: '100%',
						background: theme.palette.primary.dark,
						border: 'none',
					}}
				/>
			</Box>

			<Box sx={styles.menuItemsBox}>
				<Typography variant='h6' sx={styles.menuItemsBlockTitle}>
					Genres
				</Typography>
				{genresItems?.map((genre: Genre) => (
					<MenuItem
						key={genre?.id}
						id={genre?.id}
						label={genre?.name}
						link='/'
						active={menuItemActive === genre?.id}
						setMenuItemActive={setMenuItemActive}
					/>
				))}

				<hr
					style={{
						height: '0.5px',
						width: '100%',
						background: theme.palette.primary.dark,
						border: 'none',
					}}
				/>
			</Box>
		</Box>
	);
};

export default Sidebar;
