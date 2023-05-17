/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
};

export type CastMovie = {
	__typename?: 'CastMovie';
	adult?: Maybe<Scalars['Boolean']>;
	cast_id?: Maybe<Scalars['Int']>;
	character?: Maybe<Scalars['String']>;
	credit_id?: Maybe<Scalars['String']>;
	gender?: Maybe<Scalars['Int']>;
	id?: Maybe<Scalars['Int']>;
	known_for_department?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	order?: Maybe<Scalars['Int']>;
	original_name?: Maybe<Scalars['String']>;
	popularity?: Maybe<Scalars['Int']>;
	profile_path?: Maybe<Scalars['String']>;
};

export type CollectionTranslate = {
	__typename?: 'CollectionTranslate';
	data?: Maybe<CollectionTranslateData>;
	english_name?: Maybe<Scalars['String']>;
	iso_639_1?: Maybe<Scalars['String']>;
	iso_3166_1?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
};

export type CollectionTranslateData = {
	__typename?: 'CollectionTranslateData';
	homepage?: Maybe<Scalars['String']>;
	overview?: Maybe<Scalars['String']>;
	title?: Maybe<Scalars['String']>;
};

export type CrewMovie = {
	__typename?: 'CrewMovie';
	adult?: Maybe<Scalars['Boolean']>;
	credit_id?: Maybe<Scalars['String']>;
	department?: Maybe<Scalars['String']>;
	gender?: Maybe<Scalars['Int']>;
	id?: Maybe<Scalars['Int']>;
	job?: Maybe<Scalars['String']>;
	known_for_department?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	original_name?: Maybe<Scalars['String']>;
	popularity?: Maybe<Scalars['Int']>;
	profile_path?: Maybe<Scalars['String']>;
};

export type Genre = {
	__typename?: 'Genre';
	id: Scalars['Int'];
	name: Scalars['String'];
};

export type GenreResponses = {
	__typename?: 'GenreResponses';
	genres?: Maybe<Array<Maybe<Genre>>>;
};

export type KeywordMoviesResponse = {
	__typename?: 'KeywordMoviesResponse';
	id?: Maybe<Scalars['Int']>;
	page?: Maybe<Scalars['Int']>;
	results?: Maybe<Array<Maybe<Movie>>>;
	total_pages?: Maybe<Scalars['Int']>;
	total_results?: Maybe<Scalars['Int']>;
};

export type Keywords = {
	__typename?: 'Keywords';
	id?: Maybe<Scalars['Int']>;
	name?: Maybe<Scalars['String']>;
};

export enum LanguageEnum {
	En = 'EN',
	Es = 'ES',
	Fr = 'FR',
	Us = 'US',
}

export type Movie = {
	__typename?: 'Movie';
	adult?: Maybe<Scalars['Boolean']>;
	backdrop_path?: Maybe<Scalars['String']>;
	genre_ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
	id?: Maybe<Scalars['Int']>;
	images?: Maybe<MovieImageResponse>;
	original_language?: Maybe<Scalars['String']>;
	original_title?: Maybe<Scalars['String']>;
	overview?: Maybe<Scalars['String']>;
	popularity?: Maybe<Scalars['Float']>;
	poster_path?: Maybe<Scalars['String']>;
	release_date?: Maybe<Scalars['String']>;
	title?: Maybe<Scalars['String']>;
	video?: Maybe<Scalars['Boolean']>;
	vote_average?: Maybe<Scalars['Float']>;
	vote_count?: Maybe<Scalars['Int']>;
};

export type MovieCastResponse = {
	__typename?: 'MovieCastResponse';
	cast?: Maybe<Array<Maybe<CastMovie>>>;
	id?: Maybe<Scalars['Int']>;
};

export type MovieCrewResponse = {
	__typename?: 'MovieCrewResponse';
	crew?: Maybe<Array<Maybe<CrewMovie>>>;
	id?: Maybe<Scalars['Int']>;
};

export type MovieDetails = {
	__typename?: 'MovieDetails';
	adult?: Maybe<Scalars['Boolean']>;
	backdrop_path?: Maybe<Scalars['String']>;
	budget?: Maybe<Scalars['Int']>;
	genre_ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
	genres?: Maybe<Array<Maybe<Genre>>>;
	homepage?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['Int']>;
	images?: Maybe<MovieImageResponse>;
	imdb_id?: Maybe<Scalars['String']>;
	original_language?: Maybe<Scalars['String']>;
	original_title?: Maybe<Scalars['String']>;
	overview?: Maybe<Scalars['String']>;
	popularity?: Maybe<Scalars['Float']>;
	poster_path?: Maybe<Scalars['String']>;
	production_companies?: Maybe<Array<Maybe<ProductionCompany>>>;
	production_countries?: Maybe<Array<Maybe<ProductionCountry>>>;
	release_date?: Maybe<Scalars['String']>;
	runtime?: Maybe<Scalars['Int']>;
	spoken_languages?: Maybe<Array<Maybe<Spoken_Languages>>>;
	status?: Maybe<Scalars['String']>;
	tagline?: Maybe<Scalars['String']>;
	title?: Maybe<Scalars['String']>;
	video?: Maybe<Scalars['Boolean']>;
	vote_average?: Maybe<Scalars['Float']>;
	vote_count?: Maybe<Scalars['Int']>;
};

export type MovieImageResponse = {
	__typename?: 'MovieImageResponse';
	backdrops?: Maybe<Array<Maybe<PosterMovie>>>;
	id?: Maybe<Scalars['Int']>;
	posters?: Maybe<Array<Maybe<PosterMovie>>>;
};

export type MoviesCollectionResponse = {
	__typename?: 'MoviesCollectionResponse';
	backdrop_path?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['Int']>;
	name?: Maybe<Scalars['String']>;
	overview?: Maybe<Scalars['String']>;
	parts?: Maybe<Array<Maybe<Movie>>>;
};

export type MoviesCollectionTranslateResponse = {
	__typename?: 'MoviesCollectionTranslateResponse';
	id?: Maybe<Scalars['Int']>;
	translations?: Maybe<Array<Maybe<CollectionTranslate>>>;
};

export type MoviesKeywordsResponse = {
	__typename?: 'MoviesKeywordsResponse';
	id?: Maybe<Scalars['Int']>;
	keywords?: Maybe<Array<Maybe<Keywords>>>;
};

export type MoviesResponse = {
	__typename?: 'MoviesResponse';
	page: Scalars['Int'];
	results: Array<Maybe<Movie>>;
	total_pages: Scalars['Int'];
	total_results: Scalars['Int'];
};

export type OptionsInput = {
	language?: InputMaybe<LanguageEnum>;
	page?: InputMaybe<Scalars['Int']>;
	region?: InputMaybe<RegionEnum>;
};

export type Person = {
	__typename?: 'Person';
	adult?: Maybe<Scalars['Boolean']>;
	also_known_as?: Maybe<Array<Maybe<Scalars['String']>>>;
	biography?: Maybe<Scalars['String']>;
	birthday?: Maybe<Scalars['String']>;
	deathday?: Maybe<Scalars['String']>;
	gender?: Maybe<Scalars['String']>;
	homepage?: Maybe<Scalars['String']>;
	id?: Maybe<Scalars['Int']>;
	imdb_id?: Maybe<Scalars['String']>;
	known_for_department?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	place_of_birth?: Maybe<Scalars['String']>;
	popularity?: Maybe<Scalars['Float']>;
	profile_path?: Maybe<Scalars['String']>;
};

export type PersonCastResponse = {
	__typename?: 'PersonCastResponse';
	cast?: Maybe<Array<Maybe<CastMovie>>>;
	id?: Maybe<Scalars['Int']>;
};

export type PersonCrewResponse = {
	__typename?: 'PersonCrewResponse';
	crew?: Maybe<Array<Maybe<CrewMovie>>>;
	id?: Maybe<Scalars['Int']>;
};

export type PosterMovie = {
	__typename?: 'PosterMovie';
	aspect_ratio?: Maybe<Scalars['Float']>;
	file_path?: Maybe<Scalars['String']>;
	height?: Maybe<Scalars['Int']>;
	iso_639_1?: Maybe<Scalars['String']>;
	vote_average?: Maybe<Scalars['Float']>;
	vote_count?: Maybe<Scalars['Int']>;
	width?: Maybe<Scalars['Int']>;
};

export type ProductionCompany = {
	__typename?: 'ProductionCompany';
	id?: Maybe<Scalars['Int']>;
	logo_path?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	origin_country?: Maybe<Scalars['String']>;
};

export type ProductionCountry = {
	__typename?: 'ProductionCountry';
	iso_3166_1?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
};

export type Query = {
	__typename?: 'Query';
	castByMovie?: Maybe<MovieCastResponse>;
	crewByMovie?: Maybe<MovieCrewResponse>;
	genres?: Maybe<GenreResponses>;
	imagesByMovie?: Maybe<MovieImageResponse>;
	keywordsByMovie?: Maybe<MoviesKeywordsResponse>;
	movieDetails?: Maybe<MovieDetails>;
	moviesByCollection?: Maybe<MoviesCollectionResponse>;
	moviesByKeyword?: Maybe<KeywordMoviesResponse>;
	nowPlayingMovies?: Maybe<MoviesResponse>;
	personCastByMovie?: Maybe<PersonCastResponse>;
	personCrewByMovie?: Maybe<PersonCrewResponse>;
	personDetails?: Maybe<Person>;
	popularMovies?: Maybe<MoviesResponse>;
	similarMovie?: Maybe<MoviesResponse>;
	topRatedMovies?: Maybe<MoviesResponse>;
	translationsByCollection?: Maybe<MoviesCollectionTranslateResponse>;
	upcomingMovies?: Maybe<MoviesResponse>;
};

export type QueryCastByMovieArgs = {
	movieId?: InputMaybe<Scalars['Int']>;
	options?: InputMaybe<OptionsInput>;
};

export type QueryCrewByMovieArgs = {
	movieId?: InputMaybe<Scalars['Int']>;
	options?: InputMaybe<OptionsInput>;
};

export type QueryGenresArgs = {
	options?: InputMaybe<OptionsInput>;
};

export type QueryImagesByMovieArgs = {
	movieId?: InputMaybe<Scalars['Int']>;
	options?: InputMaybe<OptionsInput>;
};

export type QueryKeywordsByMovieArgs = {
	movieId?: InputMaybe<Scalars['Int']>;
};

export type QueryMovieDetailsArgs = {
	movieId?: InputMaybe<Scalars['Int']>;
	options?: InputMaybe<OptionsInput>;
};

export type QueryMoviesByCollectionArgs = {
	collectionId?: InputMaybe<Scalars['Int']>;
	options?: InputMaybe<OptionsInput>;
};

export type QueryMoviesByKeywordArgs = {
	keywordId?: InputMaybe<Scalars['Int']>;
	options?: InputMaybe<OptionsInput>;
};

export type QueryNowPlayingMoviesArgs = {
	options?: InputMaybe<OptionsInput>;
};

export type QueryPersonCastByMovieArgs = {
	options?: InputMaybe<OptionsInput>;
	personId?: InputMaybe<Scalars['Int']>;
};

export type QueryPersonCrewByMovieArgs = {
	options?: InputMaybe<OptionsInput>;
	personId?: InputMaybe<Scalars['Int']>;
};

export type QueryPersonDetailsArgs = {
	options?: InputMaybe<OptionsInput>;
	personId?: InputMaybe<Scalars['Int']>;
};

export type QueryPopularMoviesArgs = {
	options?: InputMaybe<OptionsInput>;
};

export type QuerySimilarMovieArgs = {
	movieId?: InputMaybe<Scalars['Int']>;
	options?: InputMaybe<OptionsInput>;
};

export type QueryTopRatedMoviesArgs = {
	options?: InputMaybe<OptionsInput>;
};

export type QueryTranslationsByCollectionArgs = {
	collectionId?: InputMaybe<Scalars['Int']>;
	options?: InputMaybe<OptionsInput>;
};

export type QueryUpcomingMoviesArgs = {
	options?: InputMaybe<OptionsInput>;
};

export enum RegionEnum {
	En = 'EN',
	Es = 'ES',
	Fr = 'FR',
	Us = 'US',
}

export type Spoken_Languages = {
	__typename?: 'spoken_languages';
	iso_639_1?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
};

export type PopularMoviesQueryVariables = Exact<{
	options?: InputMaybe<OptionsInput>;
}>;

export type PopularMoviesQuery = {
	__typename?: 'Query';
	popularMovies?: {
		__typename?: 'MoviesResponse';
		page: number;
		total_pages: number;
		total_results: number;
		results: Array<{
			__typename?: 'Movie';
			id?: number | null;
			title?: string | null;
			vote_average?: number | null;
			popularity?: number | null;
			poster_path?: string | null;
		} | null>;
	} | null;
};

export type GenresQueryVariables = Exact<{
	options?: InputMaybe<OptionsInput>;
}>;

export type GenresQuery = {
	__typename?: 'Query';
	genres?: {
		__typename?: 'GenreResponses';
		genres?: Array<{
			__typename?: 'Genre';
			id: number;
			name: string;
		} | null> | null;
	} | null;
};

export type MovieDetailsQueryVariables = Exact<{
	movieId?: InputMaybe<Scalars['Int']>;
	options?: InputMaybe<OptionsInput>;
}>;

export type MovieDetailsQuery = {
	__typename?: 'Query';
	movieDetails?: {
		__typename?: 'MovieDetails';
		id?: number | null;
		original_title?: string | null;
		title?: string | null;
		overview?: string | null;
		adult?: boolean | null;
		backdrop_path?: string | null;
		budget?: number | null;
		genre_ids?: Array<number | null> | null;
		homepage?: string | null;
		imdb_id?: string | null;
		original_language?: string | null;
		popularity?: number | null;
		poster_path?: string | null;
		release_date?: string | null;
		runtime?: number | null;
		status?: string | null;
		tagline?: string | null;
		video?: boolean | null;
		vote_average?: number | null;
		vote_count?: number | null;
		genres?: Array<{
			__typename?: 'Genre';
			id: number;
			name: string;
		} | null> | null;
		production_companies?: Array<{
			__typename?: 'ProductionCompany';
			id?: number | null;
			name?: string | null;
			logo_path?: string | null;
			origin_country?: string | null;
		} | null> | null;
		production_countries?: Array<{
			__typename?: 'ProductionCountry';
			iso_3166_1?: string | null;
			name?: string | null;
		} | null> | null;
		spoken_languages?: Array<{
			__typename?: 'spoken_languages';
			iso_639_1?: string | null;
			name?: string | null;
		} | null> | null;
		images?: {
			__typename?: 'MovieImageResponse';
			id?: number | null;
			backdrops?: Array<{
				__typename?: 'PosterMovie';
				aspect_ratio?: number | null;
				file_path?: string | null;
				height?: number | null;
				iso_639_1?: string | null;
				vote_average?: number | null;
				vote_count?: number | null;
				width?: number | null;
			} | null> | null;
			posters?: Array<{
				__typename?: 'PosterMovie';
				aspect_ratio?: number | null;
				file_path?: string | null;
				height?: number | null;
				iso_639_1?: string | null;
				vote_average?: number | null;
				vote_count?: number | null;
				width?: number | null;
			} | null> | null;
		} | null;
	} | null;
};

export type MoviePreviewQueryVariables = Exact<{
	movieId?: InputMaybe<Scalars['Int']>;
	options?: InputMaybe<OptionsInput>;
}>;

export type MoviePreviewQuery = {
	__typename?: 'Query';
	movieDetails?: {
		__typename?: 'MovieDetails';
		id?: number | null;
		original_title?: string | null;
		title?: string | null;
		overview?: string | null;
		adult?: boolean | null;
		backdrop_path?: string | null;
		budget?: number | null;
		genre_ids?: Array<number | null> | null;
		homepage?: string | null;
		imdb_id?: string | null;
		original_language?: string | null;
		popularity?: number | null;
		poster_path?: string | null;
		release_date?: string | null;
		runtime?: number | null;
		status?: string | null;
		tagline?: string | null;
		video?: boolean | null;
		vote_average?: number | null;
		vote_count?: number | null;
		genres?: Array<{
			__typename?: 'Genre';
			id: number;
			name: string;
		} | null> | null;
		production_companies?: Array<{
			__typename?: 'ProductionCompany';
			id?: number | null;
			name?: string | null;
			logo_path?: string | null;
			origin_country?: string | null;
		} | null> | null;
		production_countries?: Array<{
			__typename?: 'ProductionCountry';
			iso_3166_1?: string | null;
			name?: string | null;
		} | null> | null;
		spoken_languages?: Array<{
			__typename?: 'spoken_languages';
			iso_639_1?: string | null;
			name?: string | null;
		} | null> | null;
		images?: {
			__typename?: 'MovieImageResponse';
			id?: number | null;
			backdrops?: Array<{
				__typename?: 'PosterMovie';
				aspect_ratio?: number | null;
				file_path?: string | null;
				height?: number | null;
				iso_639_1?: string | null;
				vote_average?: number | null;
				vote_count?: number | null;
				width?: number | null;
			} | null> | null;
			posters?: Array<{
				__typename?: 'PosterMovie';
				aspect_ratio?: number | null;
				file_path?: string | null;
				height?: number | null;
				iso_639_1?: string | null;
				vote_average?: number | null;
				vote_count?: number | null;
				width?: number | null;
			} | null> | null;
		} | null;
	} | null;
};

export const PopularMoviesDocument = gql`
	query PopularMovies($options: OptionsInput) {
		popularMovies(options: $options) {
			page
			total_pages
			total_results
			results {
				id
				title
				vote_average
				popularity
				poster_path
			}
		}
	}
`;

/**
 * __usePopularMoviesQuery__
 *
 * To run a query within a React component, call `usePopularMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePopularMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePopularMoviesQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function usePopularMoviesQuery(
	baseOptions?: Apollo.QueryHookOptions<
		PopularMoviesQuery,
		PopularMoviesQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<PopularMoviesQuery, PopularMoviesQueryVariables>(
		PopularMoviesDocument,
		options,
	);
}
export function usePopularMoviesLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		PopularMoviesQuery,
		PopularMoviesQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<PopularMoviesQuery, PopularMoviesQueryVariables>(
		PopularMoviesDocument,
		options,
	);
}
export type PopularMoviesQueryHookResult = ReturnType<
	typeof usePopularMoviesQuery
>;
export type PopularMoviesLazyQueryHookResult = ReturnType<
	typeof usePopularMoviesLazyQuery
>;
export type PopularMoviesQueryResult = Apollo.QueryResult<
	PopularMoviesQuery,
	PopularMoviesQueryVariables
>;
export const GenresDocument = gql`
	query Genres($options: OptionsInput) {
		genres(options: $options) {
			genres {
				id
				name
			}
		}
	}
`;

/**
 * __useGenresQuery__
 *
 * To run a query within a React component, call `useGenresQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenresQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGenresQuery(
	baseOptions?: Apollo.QueryHookOptions<GenresQuery, GenresQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GenresQuery, GenresQueryVariables>(
		GenresDocument,
		options,
	);
}
export function useGenresLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<GenresQuery, GenresQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GenresQuery, GenresQueryVariables>(
		GenresDocument,
		options,
	);
}
export type GenresQueryHookResult = ReturnType<typeof useGenresQuery>;
export type GenresLazyQueryHookResult = ReturnType<typeof useGenresLazyQuery>;
export type GenresQueryResult = Apollo.QueryResult<
	GenresQuery,
	GenresQueryVariables
>;
export const MovieDetailsDocument = gql`
	query MovieDetails($movieId: Int, $options: OptionsInput) {
		movieDetails(movieId: $movieId, options: $options) {
			id
			genres {
				id
				name
			}
			original_title
			title
			overview
			adult
			backdrop_path
			budget
			genre_ids
			homepage
			imdb_id
			original_language
			popularity
			poster_path
			production_companies {
				id
				name
				logo_path
				origin_country
			}
			production_countries {
				iso_3166_1
				name
			}
			release_date
			runtime
			spoken_languages {
				iso_639_1
				name
			}
			status
			tagline
			video
			vote_average
			vote_count
			images {
				backdrops {
					aspect_ratio
					file_path
					height
					iso_639_1
					vote_average
					vote_count
					width
				}
				id
				posters {
					aspect_ratio
					file_path
					height
					iso_639_1
					vote_average
					vote_count
					width
				}
			}
		}
	}
`;

/**
 * __useMovieDetailsQuery__
 *
 * To run a query within a React component, call `useMovieDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMovieDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMovieDetailsQuery({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      options: // value for 'options'
 *   },
 * });
 */
export function useMovieDetailsQuery(
	baseOptions?: Apollo.QueryHookOptions<
		MovieDetailsQuery,
		MovieDetailsQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<MovieDetailsQuery, MovieDetailsQueryVariables>(
		MovieDetailsDocument,
		options,
	);
}
export function useMovieDetailsLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		MovieDetailsQuery,
		MovieDetailsQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<MovieDetailsQuery, MovieDetailsQueryVariables>(
		MovieDetailsDocument,
		options,
	);
}
export type MovieDetailsQueryHookResult = ReturnType<
	typeof useMovieDetailsQuery
>;
export type MovieDetailsLazyQueryHookResult = ReturnType<
	typeof useMovieDetailsLazyQuery
>;
export type MovieDetailsQueryResult = Apollo.QueryResult<
	MovieDetailsQuery,
	MovieDetailsQueryVariables
>;
export const MoviePreviewDocument = gql`
	query MoviePreview($movieId: Int, $options: OptionsInput) {
		movieDetails(movieId: $movieId, options: $options) {
			id
			genres {
				id
				name
			}
			original_title
			title
			overview
			adult
			backdrop_path
			budget
			genre_ids
			homepage
			imdb_id
			original_language
			popularity
			poster_path
			production_companies {
				id
				name
				logo_path
				origin_country
			}
			production_countries {
				iso_3166_1
				name
			}
			release_date
			runtime
			spoken_languages {
				iso_639_1
				name
			}
			status
			tagline
			video
			vote_average
			vote_count
			images {
				backdrops {
					aspect_ratio
					file_path
					height
					iso_639_1
					vote_average
					vote_count
					width
				}
				id
				posters {
					aspect_ratio
					file_path
					height
					iso_639_1
					vote_average
					vote_count
					width
				}
			}
		}
	}
`;

/**
 * __useMoviePreviewQuery__
 *
 * To run a query within a React component, call `useMoviePreviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useMoviePreviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMoviePreviewQuery({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      options: // value for 'options'
 *   },
 * });
 */
export function useMoviePreviewQuery(
	baseOptions?: Apollo.QueryHookOptions<
		MoviePreviewQuery,
		MoviePreviewQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<MoviePreviewQuery, MoviePreviewQueryVariables>(
		MoviePreviewDocument,
		options,
	);
}
export function useMoviePreviewLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		MoviePreviewQuery,
		MoviePreviewQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<MoviePreviewQuery, MoviePreviewQueryVariables>(
		MoviePreviewDocument,
		options,
	);
}
export type MoviePreviewQueryHookResult = ReturnType<
	typeof useMoviePreviewQuery
>;
export type MoviePreviewLazyQueryHookResult = ReturnType<
	typeof useMoviePreviewLazyQuery
>;
export type MoviePreviewQueryResult = Apollo.QueryResult<
	MoviePreviewQuery,
	MoviePreviewQueryVariables
>;
