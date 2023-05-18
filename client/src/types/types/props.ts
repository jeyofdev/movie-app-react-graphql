import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
	Genre,
	Movie,
	MovieDetails,
} from '@graphql/__generated__/graphql-type';
import { Dispatch, ReactNode, SetStateAction } from 'react';

export type ThemeContextProviderPropsType = {
	children: ReactNode;
};

export type MainContainerPropsType = {
	children: ReactNode;
};

export type MenuItemPropsType = {
	id: string | number;
	label: string;
	icon?: IconDefinition;
	link: string;
	active: boolean;
	disableRipple: boolean;
	setMenuItemActive: Dispatch<SetStateAction<string | number>>;
};

export type MenuItemType = Pick<MenuItemPropsType, 'icon' | 'link'> & {
	id: string;
	name: string;
};

export type BaseButtonPropsType = {
	onClick: () => void;
	style?: object;
	active?: boolean;
	disableRipple?: boolean;
	variant?: 'contained' | 'outlined' | 'text';
	children: ReactNode;
};

export type BlockSidebarMenuProps = {
	title: string;
	menuItems: Array<Genre> | Array<MenuItemType>;
	menuItemActive: string | number;
	setMenuItemActive: Dispatch<SetStateAction<string | number>>;
	mobile?: boolean;
};

export type MainSwiperProps = {
	list: Array<Movie>;
	component: 'ThumbnailCard';
	setPopularMoviesSelected: Dispatch<SetStateAction<number | null>>;
};

export type ThumbnailCardProps = Pick<Movie, 'title' | 'poster_path'>;

export type MoviePreviewCardProps = Pick<
	MovieDetails,
	'backdrop_path' | 'title' | 'overview' | 'genres' | 'runtime' | 'vote_average'
> & {
	stylesBox: object;
};

export type SwiperSectionProps = {
	list: Array<Movie>;
	setMoviesSelectedId: Dispatch<SetStateAction<number | null>>;
};
