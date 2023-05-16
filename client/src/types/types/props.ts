import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Genre, Movie } from '@graphql/__generated__/graphql-type';
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
	disableRipple: boolean;
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
};
