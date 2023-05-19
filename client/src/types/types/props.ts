import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
	Genre,
	Movie,
	MovieDetails,
} from '@graphql/__generated__/graphql-type';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { MoviesListCategoryEnum } from '../enums';

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
	moviesListCategory: MoviesListCategoryEnum;
	setPopularMoviesSelected: Dispatch<SetStateAction<number | null>>;
	setMoviesListCategory: Dispatch<
		SetStateAction<MoviesListCategoryEnum | null>
	>;
};

export type ThumbnailCardProps = Pick<Movie, 'title' | 'poster_path'>;

export type MoviePreviewCardProps = Pick<
	MovieDetails,
	'backdrop_path' | 'title' | 'overview' | 'genres' | 'runtime' | 'vote_average'
> & {
	stylesBox: object;
};

export type SelectedThumbsGalleryCardProps = Pick<
	MovieDetails,
	'title' | 'runtime' | 'genres' | 'overview'
>;

export type SwiperSectionProps = {
	swiperType?: 'default' | 'thumbs-gallery';
	title: string;
	list: Array<Movie>;
	moviesListCategory: MoviesListCategoryEnum;
	activeItemSwiperGallery?: Movie | null;
	setActiveItemSwiperGallery?: Dispatch<SetStateAction<Movie | null>>;
	setMoviesSelectedId?: Dispatch<SetStateAction<number | null>>;
	setMoviesListCategory: Dispatch<
		SetStateAction<MoviesListCategoryEnum | null>
	>;
};

export type VoteAverageProps = {
	voteAverage: number;
};

export type LinksGenresProps = {
	genres: Array<Genre>;
};

export type SwiperThumbsGalleryType = {
	list: Array<Movie>;
	hasButton: boolean;
	swiperBox?: object;
	activeItemSwiperGallery: Movie;
	setActiveImage: Dispatch<SetStateAction<Movie | null>>;
};

export type TagsProps = Pick<MovieDetails, 'genres' | 'runtime'>;
