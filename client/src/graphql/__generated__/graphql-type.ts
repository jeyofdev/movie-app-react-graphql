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
	popularity?: Maybe<Scalars['Float']>;
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

export type DiscoverInput = {
	language?: InputMaybe<LanguageEnum>;
	page?: InputMaybe<Scalars['Int']>;
	region?: InputMaybe<LanguageEnum>;
	sort_by?: InputMaybe<SortEnum>;
	with_genres?: InputMaybe<Scalars['Int']>;
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
	De = 'de',
	En = 'en',
	Es = 'es',
	Fr = 'fr',
}

export type Movie = {
	__typename?: 'Movie';
	adult?: Maybe<Scalars['Boolean']>;
	backdrop_path?: Maybe<Scalars['String']>;
	genre_ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
	genres?: Maybe<Array<Maybe<Genre>>>;
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

export type MoviesByCastPersonResponse = {
	__typename?: 'MoviesByCastPersonResponse';
	cast?: Maybe<Array<Maybe<Movie>>>;
	id?: Maybe<Scalars['Int']>;
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
	region?: InputMaybe<LanguageEnum>;
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
	discoverMoviesByGenre?: Maybe<MoviesResponse>;
	genres?: Maybe<GenreResponses>;
	imagesByMovie?: Maybe<MovieImageResponse>;
	keywordsByMovie?: Maybe<MoviesKeywordsResponse>;
	movieDetails?: Maybe<MovieDetails>;
	moviesByCastPerson?: Maybe<MoviesByCastPersonResponse>;
	moviesByCollection?: Maybe<MoviesCollectionResponse>;
	moviesByKeyword?: Maybe<KeywordMoviesResponse>;
	nowPlayingMovies?: Maybe<MoviesResponse>;
	personCastByMovie?: Maybe<PersonCastResponse>;
	personCrewByMovie?: Maybe<PersonCrewResponse>;
	personDetails?: Maybe<Person>;
	popularMovies?: Maybe<MoviesResponse>;
	searchMovies?: Maybe<MoviesResponse>;
	similarMovie?: Maybe<MoviesResponse>;
	sortMovies?: Maybe<MoviesResponse>;
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

export type QueryDiscoverMoviesByGenreArgs = {
	discoverOptions?: InputMaybe<DiscoverInput>;
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

export type QueryMoviesByCastPersonArgs = {
	options?: InputMaybe<OptionsInput>;
	personId?: InputMaybe<Scalars['Int']>;
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

export type QuerySearchMoviesArgs = {
	searchOptions?: InputMaybe<SearchInput>;
};

export type QuerySimilarMovieArgs = {
	movieId?: InputMaybe<Scalars['Int']>;
	options?: InputMaybe<OptionsInput>;
};

export type QuerySortMoviesArgs = {
	discoverOptions?: InputMaybe<DiscoverInput>;
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

export type SearchInput = {
	language?: InputMaybe<LanguageEnum>;
	page?: InputMaybe<Scalars['Int']>;
	query?: InputMaybe<Scalars['String']>;
	region?: InputMaybe<LanguageEnum>;
};

export enum SortEnum {
	PopularityAsc = 'POPULARITY_ASC',
	PopularityDesc = 'POPULARITY_DESC',
	PrimaryReleaseDateAsc = 'PRIMARY_RELEASE_DATE_ASC',
	PrimaryReleaseDateDesc = 'PRIMARY_RELEASE_DATE_DESC',
	VoteAsc = 'VOTE_ASC',
	VoteDesc = 'VOTE_DESC',
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
			adult?: boolean | null;
			backdrop_path?: string | null;
			genre_ids?: Array<number | null> | null;
			id?: number | null;
			original_language?: string | null;
			original_title?: string | null;
			overview?: string | null;
			popularity?: number | null;
			poster_path?: string | null;
			release_date?: string | null;
			title?: string | null;
			video?: boolean | null;
			vote_average?: number | null;
			vote_count?: number | null;
			images?: {
				__typename?: 'MovieImageResponse';
				backdrops?: Array<{
					__typename?: 'PosterMovie';
					file_path?: string | null;
				} | null> | null;
			} | null;
		} | null>;
	} | null;
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
			backdrop_path?: string | null;
		} | null>;
	} | null;
};

export type UpcomingMoviesQueryVariables = Exact<{
	options?: InputMaybe<OptionsInput>;
}>;

export type UpcomingMoviesQuery = {
	__typename?: 'Query';
	upcomingMovies?: {
		__typename?: 'MoviesResponse';
		page: number;
		total_pages: number;
		total_results: number;
		results: Array<{
			__typename?: 'Movie';
			adult?: boolean | null;
			backdrop_path?: string | null;
			genre_ids?: Array<number | null> | null;
			id?: number | null;
			original_language?: string | null;
			original_title?: string | null;
			overview?: string | null;
			popularity?: number | null;
			poster_path?: string | null;
			release_date?: string | null;
			title?: string | null;
			video?: boolean | null;
			vote_average?: number | null;
			vote_count?: number | null;
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
		} | null>;
	} | null;
};

export type TopRatedMoviesQueryVariables = Exact<{
	options?: InputMaybe<OptionsInput>;
}>;

export type TopRatedMoviesQuery = {
	__typename?: 'Query';
	topRatedMovies?: {
		__typename?: 'MoviesResponse';
		page: number;
		total_pages: number;
		total_results: number;
		results: Array<{
			__typename?: 'Movie';
			adult?: boolean | null;
			backdrop_path?: string | null;
			genre_ids?: Array<number | null> | null;
			id?: number | null;
			original_language?: string | null;
			original_title?: string | null;
			overview?: string | null;
			popularity?: number | null;
			poster_path?: string | null;
			release_date?: string | null;
			title?: string | null;
			video?: boolean | null;
			vote_average?: number | null;
			vote_count?: number | null;
			images?: {
				__typename?: 'MovieImageResponse';
				id?: number | null;
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
			} | null;
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

export type DiscoverMoviesByGenreQueryVariables = Exact<{
	discoverOptions?: InputMaybe<DiscoverInput>;
}>;

export type DiscoverMoviesByGenreQuery = {
	__typename?: 'Query';
	discoverMoviesByGenre?: {
		__typename?: 'MoviesResponse';
		page: number;
		total_pages: number;
		total_results: number;
		results: Array<{
			__typename?: 'Movie';
			adult?: boolean | null;
			backdrop_path?: string | null;
			genre_ids?: Array<number | null> | null;
			id?: number | null;
			original_language?: string | null;
			original_title?: string | null;
			overview?: string | null;
			popularity?: number | null;
			poster_path?: string | null;
			release_date?: string | null;
			title?: string | null;
			video?: boolean | null;
			vote_average?: number | null;
			vote_count?: number | null;
			images?: {
				__typename?: 'MovieImageResponse';
				backdrops?: Array<{
					__typename?: 'PosterMovie';
					file_path?: string | null;
				} | null> | null;
			} | null;
		} | null>;
	} | null;
};

export type CastByMovieQueryVariables = Exact<{
	movieId?: InputMaybe<Scalars['Int']>;
	options?: InputMaybe<OptionsInput>;
}>;

export type CastByMovieQuery = {
	__typename?: 'Query';
	castByMovie?: {
		__typename?: 'MovieCastResponse';
		id?: number | null;
		cast?: Array<{
			__typename?: 'CastMovie';
			adult?: boolean | null;
			gender?: number | null;
			id?: number | null;
			known_for_department?: string | null;
			name?: string | null;
			original_name?: string | null;
			popularity?: number | null;
			profile_path?: string | null;
			cast_id?: number | null;
			character?: string | null;
			credit_id?: string | null;
			order?: number | null;
		} | null> | null;
	} | null;
};

export type SearchMoviesQueryVariables = Exact<{
	searchOptions?: InputMaybe<SearchInput>;
}>;

export type SearchMoviesQuery = {
	__typename?: 'Query';
	searchMovies?: {
		__typename?: 'MoviesResponse';
		page: number;
		total_pages: number;
		total_results: number;
		results: Array<{
			__typename?: 'Movie';
			id?: number | null;
			title?: string | null;
			adult?: boolean | null;
			backdrop_path?: string | null;
			genre_ids?: Array<number | null> | null;
			original_language?: string | null;
			original_title?: string | null;
			overview?: string | null;
			popularity?: number | null;
			poster_path?: string | null;
			release_date?: string | null;
			video?: boolean | null;
			vote_average?: number | null;
			vote_count?: number | null;
			genres?: Array<{
				__typename?: 'Genre';
				id: number;
				name: string;
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
		} | null>;
	} | null;
};

export type PersonDetailsQueryVariables = Exact<{
	personId?: InputMaybe<Scalars['Int']>;
	options?: InputMaybe<OptionsInput>;
}>;

export type PersonDetailsQuery = {
	__typename?: 'Query';
	personDetails?: {
		__typename?: 'Person';
		birthday?: string | null;
		known_for_department?: string | null;
		deathday?: string | null;
		id?: number | null;
		name?: string | null;
		also_known_as?: Array<string | null> | null;
		gender?: string | null;
		biography?: string | null;
		popularity?: number | null;
		place_of_birth?: string | null;
		profile_path?: string | null;
		adult?: boolean | null;
		imdb_id?: string | null;
		homepage?: string | null;
	} | null;
};

export type MoviesByCastPersonQueryVariables = Exact<{
	personId?: InputMaybe<Scalars['Int']>;
	options?: InputMaybe<OptionsInput>;
}>;

export type MoviesByCastPersonQuery = {
	__typename?: 'Query';
	moviesByCastPerson?: {
		__typename?: 'MoviesByCastPersonResponse';
		cast?: Array<{
			__typename?: 'Movie';
			adult?: boolean | null;
			backdrop_path?: string | null;
			genre_ids?: Array<number | null> | null;
			id?: number | null;
			original_language?: string | null;
			original_title?: string | null;
			overview?: string | null;
			popularity?: number | null;
			poster_path?: string | null;
			release_date?: string | null;
			title?: string | null;
			video?: boolean | null;
			vote_average?: number | null;
			vote_count?: number | null;
			genres?: Array<{
				__typename?: 'Genre';
				id: number;
				name: string;
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
		} | null> | null;
	} | null;
};

export const NowPlayingMoviesDocument = gql`
	query NowPlayingMovies($options: OptionsInput) {
		nowPlayingMovies(options: $options) {
			page
			total_pages
			total_results
			results {
				adult
				backdrop_path
				genre_ids
				id
				original_language
				original_title
				overview
				popularity
				poster_path
				release_date
				title
				video
				vote_average
				vote_count
				images {
					backdrops {
						file_path
					}
				}
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
				backdrop_path
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
export const UpcomingMoviesDocument = gql`
	query UpcomingMovies($options: OptionsInput) {
		upcomingMovies(options: $options) {
			page
			total_pages
			total_results
			results {
				adult
				backdrop_path
				genre_ids
				id
				original_language
				original_title
				overview
				popularity
				poster_path
				release_date
				title
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
	}
`;

/**
 * __useUpcomingMoviesQuery__
 *
 * To run a query within a React component, call `useUpcomingMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUpcomingMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpcomingMoviesQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useUpcomingMoviesQuery(
	baseOptions?: Apollo.QueryHookOptions<
		UpcomingMoviesQuery,
		UpcomingMoviesQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<UpcomingMoviesQuery, UpcomingMoviesQueryVariables>(
		UpcomingMoviesDocument,
		options,
	);
}
export function useUpcomingMoviesLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		UpcomingMoviesQuery,
		UpcomingMoviesQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<UpcomingMoviesQuery, UpcomingMoviesQueryVariables>(
		UpcomingMoviesDocument,
		options,
	);
}
export type UpcomingMoviesQueryHookResult = ReturnType<
	typeof useUpcomingMoviesQuery
>;
export type UpcomingMoviesLazyQueryHookResult = ReturnType<
	typeof useUpcomingMoviesLazyQuery
>;
export type UpcomingMoviesQueryResult = Apollo.QueryResult<
	UpcomingMoviesQuery,
	UpcomingMoviesQueryVariables
>;
export const TopRatedMoviesDocument = gql`
	query TopRatedMovies($options: OptionsInput) {
		topRatedMovies(options: $options) {
			page
			results {
				adult
				backdrop_path
				genre_ids
				id
				original_language
				original_title
				overview
				popularity
				poster_path
				release_date
				title
				video
				vote_average
				vote_count
				images {
					posters {
						aspect_ratio
						file_path
						height
						iso_639_1
						vote_average
						vote_count
						width
					}
					id
					backdrops {
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
			total_pages
			total_results
		}
	}
`;

/**
 * __useTopRatedMoviesQuery__
 *
 * To run a query within a React component, call `useTopRatedMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTopRatedMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTopRatedMoviesQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useTopRatedMoviesQuery(
	baseOptions?: Apollo.QueryHookOptions<
		TopRatedMoviesQuery,
		TopRatedMoviesQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<TopRatedMoviesQuery, TopRatedMoviesQueryVariables>(
		TopRatedMoviesDocument,
		options,
	);
}
export function useTopRatedMoviesLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		TopRatedMoviesQuery,
		TopRatedMoviesQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<TopRatedMoviesQuery, TopRatedMoviesQueryVariables>(
		TopRatedMoviesDocument,
		options,
	);
}
export type TopRatedMoviesQueryHookResult = ReturnType<
	typeof useTopRatedMoviesQuery
>;
export type TopRatedMoviesLazyQueryHookResult = ReturnType<
	typeof useTopRatedMoviesLazyQuery
>;
export type TopRatedMoviesQueryResult = Apollo.QueryResult<
	TopRatedMoviesQuery,
	TopRatedMoviesQueryVariables
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
export const DiscoverMoviesByGenreDocument = gql`
	query DiscoverMoviesByGenre($discoverOptions: DiscoverInput) {
		discoverMoviesByGenre(discoverOptions: $discoverOptions) {
			page
			results {
				adult
				backdrop_path
				genre_ids
				id
				original_language
				original_title
				overview
				popularity
				poster_path
				release_date
				title
				video
				vote_average
				vote_count
				images {
					backdrops {
						file_path
					}
				}
			}
			total_pages
			total_results
		}
	}
`;

/**
 * __useDiscoverMoviesByGenreQuery__
 *
 * To run a query within a React component, call `useDiscoverMoviesByGenreQuery` and pass it any options that fit your needs.
 * When your component renders, `useDiscoverMoviesByGenreQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDiscoverMoviesByGenreQuery({
 *   variables: {
 *      discoverOptions: // value for 'discoverOptions'
 *   },
 * });
 */
export function useDiscoverMoviesByGenreQuery(
	baseOptions?: Apollo.QueryHookOptions<
		DiscoverMoviesByGenreQuery,
		DiscoverMoviesByGenreQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<
		DiscoverMoviesByGenreQuery,
		DiscoverMoviesByGenreQueryVariables
	>(DiscoverMoviesByGenreDocument, options);
}
export function useDiscoverMoviesByGenreLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		DiscoverMoviesByGenreQuery,
		DiscoverMoviesByGenreQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<
		DiscoverMoviesByGenreQuery,
		DiscoverMoviesByGenreQueryVariables
	>(DiscoverMoviesByGenreDocument, options);
}
export type DiscoverMoviesByGenreQueryHookResult = ReturnType<
	typeof useDiscoverMoviesByGenreQuery
>;
export type DiscoverMoviesByGenreLazyQueryHookResult = ReturnType<
	typeof useDiscoverMoviesByGenreLazyQuery
>;
export type DiscoverMoviesByGenreQueryResult = Apollo.QueryResult<
	DiscoverMoviesByGenreQuery,
	DiscoverMoviesByGenreQueryVariables
>;
export const CastByMovieDocument = gql`
	query CastByMovie($movieId: Int, $options: OptionsInput) {
		castByMovie(movieId: $movieId, options: $options) {
			cast {
				adult
				gender
				id
				known_for_department
				name
				original_name
				popularity
				profile_path
				cast_id
				character
				credit_id
				order
			}
			id
		}
	}
`;

/**
 * __useCastByMovieQuery__
 *
 * To run a query within a React component, call `useCastByMovieQuery` and pass it any options that fit your needs.
 * When your component renders, `useCastByMovieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCastByMovieQuery({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      options: // value for 'options'
 *   },
 * });
 */
export function useCastByMovieQuery(
	baseOptions?: Apollo.QueryHookOptions<
		CastByMovieQuery,
		CastByMovieQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<CastByMovieQuery, CastByMovieQueryVariables>(
		CastByMovieDocument,
		options,
	);
}
export function useCastByMovieLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		CastByMovieQuery,
		CastByMovieQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<CastByMovieQuery, CastByMovieQueryVariables>(
		CastByMovieDocument,
		options,
	);
}
export type CastByMovieQueryHookResult = ReturnType<typeof useCastByMovieQuery>;
export type CastByMovieLazyQueryHookResult = ReturnType<
	typeof useCastByMovieLazyQuery
>;
export type CastByMovieQueryResult = Apollo.QueryResult<
	CastByMovieQuery,
	CastByMovieQueryVariables
>;
export const SearchMoviesDocument = gql`
	query SearchMovies($searchOptions: SearchInput) {
		searchMovies(searchOptions: $searchOptions) {
			page
			results {
				id
				title
				adult
				backdrop_path
				genre_ids
				genres {
					id
					name
				}
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
				original_language
				original_title
				overview
				popularity
				poster_path
				release_date
				video
				vote_average
				vote_count
			}
			total_pages
			total_results
		}
	}
`;

/**
 * __useSearchMoviesQuery__
 *
 * To run a query within a React component, call `useSearchMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchMoviesQuery({
 *   variables: {
 *      searchOptions: // value for 'searchOptions'
 *   },
 * });
 */
export function useSearchMoviesQuery(
	baseOptions?: Apollo.QueryHookOptions<
		SearchMoviesQuery,
		SearchMoviesQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<SearchMoviesQuery, SearchMoviesQueryVariables>(
		SearchMoviesDocument,
		options,
	);
}
export function useSearchMoviesLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		SearchMoviesQuery,
		SearchMoviesQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<SearchMoviesQuery, SearchMoviesQueryVariables>(
		SearchMoviesDocument,
		options,
	);
}
export type SearchMoviesQueryHookResult = ReturnType<
	typeof useSearchMoviesQuery
>;
export type SearchMoviesLazyQueryHookResult = ReturnType<
	typeof useSearchMoviesLazyQuery
>;
export type SearchMoviesQueryResult = Apollo.QueryResult<
	SearchMoviesQuery,
	SearchMoviesQueryVariables
>;
export const PersonDetailsDocument = gql`
	query PersonDetails($personId: Int, $options: OptionsInput) {
		personDetails(personId: $personId, options: $options) {
			birthday
			known_for_department
			deathday
			id
			name
			also_known_as
			gender
			biography
			popularity
			place_of_birth
			profile_path
			adult
			imdb_id
			homepage
		}
	}
`;

/**
 * __usePersonDetailsQuery__
 *
 * To run a query within a React component, call `usePersonDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePersonDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePersonDetailsQuery({
 *   variables: {
 *      personId: // value for 'personId'
 *      options: // value for 'options'
 *   },
 * });
 */
export function usePersonDetailsQuery(
	baseOptions?: Apollo.QueryHookOptions<
		PersonDetailsQuery,
		PersonDetailsQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<PersonDetailsQuery, PersonDetailsQueryVariables>(
		PersonDetailsDocument,
		options,
	);
}
export function usePersonDetailsLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		PersonDetailsQuery,
		PersonDetailsQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<PersonDetailsQuery, PersonDetailsQueryVariables>(
		PersonDetailsDocument,
		options,
	);
}
export type PersonDetailsQueryHookResult = ReturnType<
	typeof usePersonDetailsQuery
>;
export type PersonDetailsLazyQueryHookResult = ReturnType<
	typeof usePersonDetailsLazyQuery
>;
export type PersonDetailsQueryResult = Apollo.QueryResult<
	PersonDetailsQuery,
	PersonDetailsQueryVariables
>;
export const MoviesByCastPersonDocument = gql`
	query MoviesByCastPerson($personId: Int, $options: OptionsInput) {
		moviesByCastPerson(personId: $personId, options: $options) {
			cast {
				adult
				backdrop_path
				genre_ids
				id
				genres {
					id
					name
				}
				original_language
				original_title
				overview
				popularity
				poster_path
				release_date
				title
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
	}
`;

/**
 * __useMoviesByCastPersonQuery__
 *
 * To run a query within a React component, call `useMoviesByCastPersonQuery` and pass it any options that fit your needs.
 * When your component renders, `useMoviesByCastPersonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMoviesByCastPersonQuery({
 *   variables: {
 *      personId: // value for 'personId'
 *      options: // value for 'options'
 *   },
 * });
 */
export function useMoviesByCastPersonQuery(
	baseOptions?: Apollo.QueryHookOptions<
		MoviesByCastPersonQuery,
		MoviesByCastPersonQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<
		MoviesByCastPersonQuery,
		MoviesByCastPersonQueryVariables
	>(MoviesByCastPersonDocument, options);
}
export function useMoviesByCastPersonLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		MoviesByCastPersonQuery,
		MoviesByCastPersonQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<
		MoviesByCastPersonQuery,
		MoviesByCastPersonQueryVariables
	>(MoviesByCastPersonDocument, options);
}
export type MoviesByCastPersonQueryHookResult = ReturnType<
	typeof useMoviesByCastPersonQuery
>;
export type MoviesByCastPersonLazyQueryHookResult = ReturnType<
	typeof useMoviesByCastPersonLazyQuery
>;
export type MoviesByCastPersonQueryResult = Apollo.QueryResult<
	MoviesByCastPersonQuery,
	MoviesByCastPersonQueryVariables
>;
