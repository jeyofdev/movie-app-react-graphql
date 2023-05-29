import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
	CastMovie,
	Genre,
	Movie,
	MovieDetails,
} from '@graphql/__generated__/graphql-type';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { Variant } from '@mui/material/styles/createTypography';
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
	isGenre?: boolean;
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

export type RoundedSwiperProps = {
	list: Array<CastMovie>;
};

export type ThumbnailCardProps = Pick<Movie, 'title' | 'poster_path'>;

export type PersonThumbnailCardProps = Pick<CastMovie, 'name' | 'profile_path'>;

export type MoviePreviewCardProps = Pick<
	MovieDetails,
	| 'id'
	| 'backdrop_path'
	| 'title'
	| 'overview'
	| 'genres'
	| 'runtime'
	| 'vote_average'
> & {
	stylesBox: object;
};

export type SelectedThumbsGalleryCardProps = Pick<
	MovieDetails,
	'id' | 'title' | 'runtime' | 'genres' | 'overview' | 'vote_average'
>;

export type SwiperSectionProps = {
	swiperType?: 'default' | 'thumbs-gallery' | 'person';
	title: string;
	list: Array<Movie | CastMovie>;
	linkAllResult?: string;
	moviesListCategory?: MoviesListCategoryEnum;
	activeItemSwiperGallery?: Movie | null;
	setActiveItemSwiperGallery?: Dispatch<SetStateAction<Movie | null>>;
	setMoviesSelectedId?: Dispatch<SetStateAction<number | null>>;
	setMoviesListCategory?: Dispatch<
		SetStateAction<MoviesListCategoryEnum | null>
	>;
	titleStyle?: object;
};

export type VoteAverageProps = {
	voteAverage: number;
	typoStyle?: object;
	typoVariant?: Variant;
	iconStyle?: object;
	hasBackground?: boolean;
};

export type LinksGenresProps = {
	genres: Array<Genre>;
	sx?: object;
};

export type SwiperThumbsGalleryType = {
	list: Array<Movie>;
	hasButton: boolean;
	swiperBox?: object;
	activeItemSwiperGallery: Movie;
	setActiveImage: Dispatch<SetStateAction<Movie | null>>;
};

export type TagsProps = Pick<MovieDetails, 'genres' | 'runtime'> & {
	sx?: object;
};

export type ListResultCardProps = Pick<
	Movie,
	'id' | 'title' | 'poster_path' | 'vote_average'
>;

export type ListContainerProps = {
	list: Array<Movie>;
	title: string;
};

export type DetailsMovieCardProps = Pick<
	MovieDetails,
	| 'title'
	| 'overview'
	| 'genres'
	| 'runtime'
	| 'vote_average'
	| 'poster_path'
	| 'backdrop_path'
> & {
	cast: Array<CastMovie>;
};

export type SearchResultMovieCardProps = Pick<
	MovieDetails,
	'id' | 'title' | 'poster_path' | 'overview' | 'release_date'
>;
