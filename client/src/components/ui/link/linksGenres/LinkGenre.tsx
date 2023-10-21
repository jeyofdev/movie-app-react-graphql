import BaseButton from '@components/ui/Button/BaseButton/BaseButton';
import BaseTooltip from '@components/ui/tooltips/baseTooltip/BaseTooltip';
import { Genre } from '@graphql/__generated__/graphql-type';
import useTheme from '@hooks/useTheme';
import { Box, Typography } from '@mui/material';
import { formatGenreForUrl } from '@utils/index';
import { useNavigate } from 'react-router-dom';
import { useWindowSize } from 'usehooks-ts';
import { BreakpointEnum } from '../../../../types/enums';
import { LinksGenresProps } from '../../../../types/types/props';
import useStyles from './style';

const LinksGenres = ({ genres, sx }: LinksGenresProps) => {
	const navigate = useNavigate();
	const { theme } = useTheme();
	const styles = useStyles(theme);
	const { width } = useWindowSize();

	const getLinkGenre = (
		arrGenres: Array<Genre>,
		genre: Genre,
		index: number,
	) => (
		<Box key={genre?.id} sx={{ display: 'flex' }}>
			<BaseButton
				style={{ ...styles.genreButton, ...sx }}
				disableRipple
				onClick={() =>
					navigate(formatGenreForUrl(genre?.name), {
						state: { genreId: genre?.id },
					})
				}
			>
				{genre?.name}
			</BaseButton>

			{index !== arrGenres.length - 1 && (
				<span style={{ ...styles.span, ...sx }}>,&nbsp;</span>
			)}
		</Box>
	);

	const getLinkGenreWithTooltip = () => {
		let length = 0;
		if (width >= 768 && width <= 960) {
			length = 4;
		}
		if (width >= 400 && width <= 768) {
			length = 3;
		}
		if (width < 400) {
			length = 2;
		}

		const arrGenre = width >= 960 ? genres : genres.slice(0, length);

		return arrGenre.map((genre: Genre, i: number) => {
			if (width >= BreakpointEnum.MD)
				return <>{getLinkGenre(arrGenre, genre, i)}</>;
			if (width >= BreakpointEnum.SM)
				return <>{i <= length && getLinkGenre(arrGenre, genre, i)}</>;
			if (width >= 400)
				return <>{i <= length && getLinkGenre(arrGenre, genre, i)}</>;

			if (i <= 1) return getLinkGenre(arrGenre, genre, i);

			return undefined;
		});
	};

	const getTooltip = (genresArr: Array<Genre>) => {
		const tooltip = (title: string) => (
			<BaseTooltip title={title} arrow>
				<Typography
					variant='h6'
					sx={{
						color: theme.palette.primary.main,
						cursor: 'pointer',
						marginTop: '3px',
					}}
				>
					...
				</Typography>
			</BaseTooltip>
		);

		if (width >= 400 && width < BreakpointEnum.SM && genresArr.length > 3) {
			return (
				<>
					{tooltip(
						genresArr
							.map((el: Genre, i: number) => i > 2 && el.name)
							?.filter((item: string | boolean) => item && item)
							?.join(', '),
					)}
				</>
			);
		}

		if (width < 400 && genresArr.length > 2) {
			return (
				<>
					{tooltip(
						genresArr
							.map((el: Genre, i: number) => i > 1 && el.name)
							?.filter((item: string | boolean) => item && item)
							?.join(', '),
					)}
				</>
			);
		}

		return <></>;
	};

	if (!genres || genres?.length === 0) {
		return <></>;
	}

	return (
		<Box sx={styles.root}>
			<>{getLinkGenreWithTooltip()}</>

			{getTooltip(genres)}
		</Box>
	);
};

export default LinksGenres;
