/* eslint-disable no-console */
import SwiperThumbs from '@components/swiper/SwiperThumbs';
import { useNowPlayingMoviesQuery } from '@graphql/__generated__/graphql-type';
import { Box } from '@mui/material';
import { useState } from 'react';
import style from './style';

export type MovieItemType = { id: number; poster_path: string };

const Home = () => {
	const [movieList, setMovieList] = useState<MovieItemType[]>([]);
	const [activeImage, setActiveImage] = useState<string | null | undefined>('');

	const { loading } = useNowPlayingMoviesQuery({
		onCompleted(data) {
			setActiveImage(data?.nowPlayingMovies?.results[0]?.poster_path);
			setMovieList(
				data?.nowPlayingMovies?.results.slice(0, 10).map(movie => ({
					id: movie?.id,
					poster_path: movie?.poster_path,
				})) as MovieItemType[],
			);
		},
		onError(error) {
			console.log(error);
		},
	});

	if (loading) {
		return <p>Loading...</p>;
	}

	return (
		<Box sx={style.root(activeImage as string)}>
			tets
			<SwiperThumbs
				list={movieList}
				hasButton={true}
				setActiveImage={setActiveImage}
			/>
		</Box>
	);
};

export default Home;
