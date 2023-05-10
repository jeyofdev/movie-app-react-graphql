/* eslint-disable no-console */
import SwiperThumbs from '@components/swiper/SwiperThumbs';
import { useNowPlayingMoviesQuery } from '@graphql/__generated__/graphql-type';
import { useState } from 'react';

export type MovieItemType = { id: number; poster_path: string };

const Home = () => {
	const [movieList, setMovieList] = useState<MovieItemType[]>([]);
	const { loading, data: nowPlayingMovieData } = useNowPlayingMoviesQuery({
		onCompleted(data) {
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

	console.log(loading, nowPlayingMovieData);

	if (loading) {
		return <p>Loading...</p>;
	}

	return (
		<>
			<SwiperThumbs list={movieList} />
		</>
	);
};

export default Home;
