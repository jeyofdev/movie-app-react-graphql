import { Control, FieldValues, UseFormReset } from 'react-hook-form';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
	CastMovie,
	Genre,
	Movie,
	MovieDetails,
} from '@graphql/__generated__/graphql-type';
import {
	ChangeEvent,
	Dispatch,
	MouseEventHandler,
	ReactNode,
	SetStateAction,
} from 'react';
import { Variant } from '@mui/material/styles/createTypography';
import { MoviesListCategoryEnum, SwiperDirectionEnum } from '../enums';

export type ThemeContextProviderPropsType = {
	children: ReactNode;
};

export type MainContainerPropsType = {
	children: ReactNode;
};

export type AuthMainContainerPropsType = {
	children: ReactNode;
};

export type MenuItemPropsType = {
	id: string | number;
	label: string;
	icon?: IconDefinition;
	link: string;
	active: boolean;
	disableRipple: boolean;
	setMenuItemActive: Dispatch<SetStateAction<string | null>>;
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
	menuItemActive: string;
	setMenuItemActive: Dispatch<SetStateAction<string | null>>;
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
> & {
	cardGridColumn: object;
};

export type ListContainerProps = {
	list: Array<Movie>;
	title?: string;
	cardGridColumn?: object;
	totalPages?: number;
	currentPage?: number;
	setCurrentPage?: (event: ChangeEvent<unknown>, value: number) => void;
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

export type SwiperButtonProps = {
	direction: SwiperDirectionEnum;
};

export type PersonInfoProps = {
	title: string;
	value: string;
	subValue?: number | null | '';
	subValueEnd?: string | null | '';
};

export type ModalPropsType = {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
	close?: boolean;
	onClose: unknown;
	back?: boolean;
	setStep?: Dispatch<SetStateAction<number>>;
	title: string | ReactNode;
	children?: ReactNode;
	resetForm?: UseFormReset<FieldValues>;
};

export type SignUpModalPropsType = Pick<
	ModalPropsType,
	'open' | 'setOpen' | 'children'
> & {
	title: { stepOne: string; stepTwo: string };
	step: number;
	setStep: Dispatch<SetStateAction<number>>;
	onRedirect: () => void;
};

export type SignInModalPropsType = Pick<
	ModalPropsType,
	'open' | 'setOpen' | 'children'
> & {
	title: { stepOne: string; stepTwo: string };
	step: number;
	setStep: Dispatch<SetStateAction<number>>;
	onRedirect: () => void;
};

export type SocialButtonPropsType = {
	icon: IconDefinition;
	label: string;
	onClick: () => void;
};

export type InputTextPropsType = {
	control: Control<FieldValues>;
	validation: object;
	label: string;
	id: string;
	name: string;
	placeholder?: string;
	icon: IconDefinition;
	password?: boolean;
};

export type UserMenuPropsType = {
	onClickLogin: MouseEventHandler<HTMLLIElement>;
	onClickSignUp: MouseEventHandler<HTMLLIElement>;
};

export type UserMenuItemPropsType = {
	onClick: MouseEventHandler<HTMLLIElement>;
	label: string;
};

export type RedirectWithTextButtonPropsType = {
	labelBtn: string;
	content?: string;
	onClick: () => void;
};

export type AlertPropsType = {
	children: ReactNode;
};

export type ImageThumbPropsType = {
	src: string;
	imageAlt: string;
	noImageBoxStyle: object;
	posterStyle: object;
	person?: boolean;
};

export type DetailsPersonCardPropsType = {
	name: string;
	profile_path: string;
	birthday: string;
	deathday: string;
	place_of_birth: string;
	biography: string;
};
