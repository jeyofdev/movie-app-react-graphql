import SwiperThumbs from '@components/swiper/SwiperThumbs';

export type MovieItemType = { id: number; image: string };

const movieList: MovieItemType[] = [
	{ id: 1, image: 'https://placehold.co/600x400' },
	{ id: 2, image: 'https://placehold.co/600x400' },
	{ id: 3, image: 'https://placehold.co/600x400' },
	{ id: 4, image: 'https://placehold.co/600x400' },
	{ id: 5, image: 'https://placehold.co/600x400' },
];

const Home = () => (
	<>
		<SwiperThumbs list={movieList} />
	</>
);

export default Home;
