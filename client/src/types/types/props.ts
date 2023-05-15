import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
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
	setMenuItemActive: Dispatch<SetStateAction<string | number>>;
};

export type MenuItemType = Pick<
	MenuItemPropsType,
	'label' | 'icon' | 'link'
> & {
	id: string;
};

export type BaseButtonPropsType = {
	onClick: () => void;
	style?: object;
	active?: boolean;
	children: ReactNode;
};
