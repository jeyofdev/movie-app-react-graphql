import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { ApolloServer } from '@apollo/server';
import { IContext } from '../../context';
import getServer from '../../config/server';
import 'dotenv/config';
import { executeRequestForTesting } from '../../utils/helpers';
import moviesQueryOperations from '../../operations/movie.query.operations';

describe('init server', () => {
	let server: ApolloServer<IContext>;
	let url: string;

	beforeAll(async () => {
		if (!process.env.TEST_API_PORT) {
			throw new Error(
				'The environment variable TEST_API_PORT must be specified',
			);
		}
		({ server, url } = await getServer());
	});

	afterAll(async () => {
		await server.stop();
	});

	describe('queries movies', () => {
		it('When no movie found', async () => {
			const response = await executeRequestForTesting(
				url,
				moviesQueryOperations.details,
				{
					movieId: 7660450,
					options: {
						language: 'FR',
					},
				},
			);

			expect(response.error).not.toBeUndefined();
			expect(response.body.data.movieDetails).toBeNull();
		});

		it('Get the primary information about a movie.', async () => {
			const response = await executeRequestForTesting(
				url,
				moviesQueryOperations.details,
				{
					movieId: 76600,
					options: {
						language: 'FR',
					},
				},
			);

			expect(response.error).not.toBeUndefined();
			expect(response.body.data.movieDetails).toMatchSnapshot();
		});

		it('Returns a list of the current popular movies', async () => {
			const response = await executeRequestForTesting(
				url,
				moviesQueryOperations.popular,
				{
					options: {
						language: 'FR',
						page: 1,
						region: 'FR',
					},
				},
			);

			expect(response.error).not.toBeUndefined();
			expect(response.body.data.popularMovies).toMatchSnapshot();
		});

		it('Returns a list of movies in theatres', async () => {
			const response = await executeRequestForTesting(
				url,
				moviesQueryOperations.nowPlaying,
				{
					options: {
						language: 'FR',
						page: 1,
						region: 'FR',
					},
				},
			);

			expect(response.error).not.toBeUndefined();
			expect(response.body.data.nowPlayingMovies).toMatchSnapshot();
		});

		it('Returns a list of upcoming movies in theatres', async () => {
			const response = await executeRequestForTesting(
				url,
				moviesQueryOperations.upcoming,
				{
					options: {
						language: 'FR',
						page: 1,
						region: 'FR',
					},
				},
			);

			expect(response.error).not.toBeUndefined();
			expect(response.body.data.upcomingMovies).toMatchSnapshot();
		});

		it('Returns the top rated movies on TMDB', async () => {
			const response = await executeRequestForTesting(
				url,
				moviesQueryOperations.topRating,
				{
					options: {
						language: 'FR',
						page: 1,
						region: 'FR',
					},
				},
			);

			expect(response.error).not.toBeUndefined();
			expect(response.body.data.topRatedMovies).toMatchSnapshot();
		});

		it('Returns the cast for a movie', async () => {
			const response = await executeRequestForTesting(
				url,
				moviesQueryOperations.cast,
				{
					movieId: 76600,
					options: {
						language: 'FR',
					},
				},
			);

			expect(response.error).not.toBeUndefined();
			expect(response.body.data.castMovie).toMatchSnapshot();
		});

		it('Returns the crew for a movie', async () => {
			const response = await executeRequestForTesting(
				url,
				moviesQueryOperations.crew,
				{
					movieId: 76600,
					options: {
						language: 'FR',
					},
				},
			);

			expect(response.error).not.toBeUndefined();
			expect(response.body.data.crewMovie).toMatchSnapshot();
		});

		it('Returns a list of similar movies', async () => {
			const response = await executeRequestForTesting(
				url,
				moviesQueryOperations.similar,
				{
					movieId: 76600,
					options: {
						language: 'ES',
						page: 1,
					},
				},
			);

			expect(response.error).not.toBeUndefined();
			expect(response.body.data.similarMovie).toMatchSnapshot();
		});

		it('Returns the images that belong to a movie', async () => {
			const response = await executeRequestForTesting(
				url,
				moviesQueryOperations.images,
				{
					movieId: 76600,
				},
			);

			expect(response.error).not.toBeUndefined();
			expect(response.body.data.imagesMovie).toMatchSnapshot();
		});

		it('Returns the keywords that have been added to a movie', async () => {
			const response = await executeRequestForTesting(
				url,
				moviesQueryOperations.keywords,
				{
					movieId: 25,
				},
			);

			expect(response.error).not.toBeUndefined();
			expect(response.body.data.keywordsMovie).toMatchSnapshot();
		});
	});
});
