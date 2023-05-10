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
	id?: Maybe<Scalars['Int']>;
	name?: Maybe<Scalars['String']>;
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
	aspect_ratio?: Maybe<Scalars['Int']>;
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

export type NowPlayingMoviesQueryVariables = Exact<{
	options?: InputMaybe<OptionsInput>;
}>;

export type NowPlayingMoviesQuery = {
	__typename?: 'Query';
	nowPlayingMovies?: {
		__typename?: 'MoviesResponse';
		page: number;
		total_pages: number;
		total_results: number;
		results: Array<{
			__typename?: 'Movie';
			id?: number | null;
			backdrop_path?: string | null;
			original_title?: string | null;
			poster_path?: string | null;
			title?: string | null;
		} | null>;
	} | null;
};

export const NowPlayingMoviesDocument = gql`
	query NowPlayingMovies($options: OptionsInput) {
		nowPlayingMovies(options: $options) {
			page
			total_pages
			total_results
			results {
				id
				backdrop_path
				original_title
				poster_path
				title
			}
		}
	}
`;

/**
 * __useNowPlayingMoviesQuery__
 *
 * To run a query within a React component, call `useNowPlayingMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useNowPlayingMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNowPlayingMoviesQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useNowPlayingMoviesQuery(
	baseOptions?: Apollo.QueryHookOptions<
		NowPlayingMoviesQuery,
		NowPlayingMoviesQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<NowPlayingMoviesQuery, NowPlayingMoviesQueryVariables>(
		NowPlayingMoviesDocument,
		options,
	);
}
export function useNowPlayingMoviesLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		NowPlayingMoviesQuery,
		NowPlayingMoviesQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<
		NowPlayingMoviesQuery,
		NowPlayingMoviesQueryVariables
	>(NowPlayingMoviesDocument, options);
}
export type NowPlayingMoviesQueryHookResult = ReturnType<
	typeof useNowPlayingMoviesQuery
>;
export type NowPlayingMoviesLazyQueryHookResult = ReturnType<
	typeof useNowPlayingMoviesLazyQuery
>;
export type NowPlayingMoviesQueryResult = Apollo.QueryResult<
	NowPlayingMoviesQuery,
	NowPlayingMoviesQueryVariables
>;
