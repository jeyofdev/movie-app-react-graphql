import { createContext, useState } from 'react';
import { DarkModeEnum } from '../types/enums';
import { ThemeContextType } from '../types/types/context';
import { ThemeContextProviderPropsType } from '../types/types/props';

export const ThemeContext = createContext<ThemeContextType>({
	themeMode: DarkModeEnum.DARK,
	handleThemeMode: () => {},
});

const ThemeContextProvider = ({ children }: ThemeContextProviderPropsType) => {
	const [themeMode, setThemeMode] = useState<DarkModeEnum>(DarkModeEnum.DARK);

	const handleThemeMode = () => {
		setThemeMode(
			themeMode === DarkModeEnum.DARK ? DarkModeEnum.LIGHT : DarkModeEnum.DARK,
		);
	};

	return (
		<ThemeContext.Provider value={{ themeMode, handleThemeMode }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;
