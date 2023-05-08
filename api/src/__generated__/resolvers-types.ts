/* eslint-disable */
import { GraphQLResolveInfo } from 'graphql';
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
	popularity?: Maybe<Scalars['Int']>;
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
	castMovie?: Maybe<MovieCastResponse>;
	crewMovie?: Maybe<MovieCrewResponse>;
	imagesMovie?: Maybe<MovieImageResponse>;
	keywordsMovie?: Maybe<MoviesKeywordsResponse>;
	movieDetails?: Maybe<MovieDetails>;
	moviesByCollection?: Maybe<MoviesCollectionResponse>;
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

export type QueryCastMovieArgs = {
	movieId?: InputMaybe<Scalars['Int']>;
	options?: InputMaybe<OptionsInput>;
};

export type QueryCrewMovieArgs = {
	movieId?: InputMaybe<Scalars['Int']>;
	options?: InputMaybe<OptionsInput>;
};

export type QueryImagesMovieArgs = {
	movieId?: InputMaybe<Scalars['Int']>;
	options?: InputMaybe<OptionsInput>;
};

export type QueryKeywordsMovieArgs = {
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
	| ResolverFn<TResult, TParent, TContext, TArgs>
	| ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs,
> {
	subscribe: SubscriptionSubscribeFn<
		{ [key in TKey]: TResult },
		TParent,
		TContext,
		TArgs
	>;
	resolve?: SubscriptionResolveFn<
		TResult,
		{ [key in TKey]: TResult },
		TContext,
		TArgs
	>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
	subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
	resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs,
> =
	| SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
	| SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
	TResult,
	TKey extends string,
	TParent = {},
	TContext = {},
	TArgs = {},
> =
	| ((
			...args: any[]
	  ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
	| SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
	parent: TParent,
	context: TContext,
	info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
	obj: T,
	context: TContext,
	info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
	TResult = {},
	TParent = {},
	TContext = {},
	TArgs = {},
> = (
	next: NextResolverFn<TResult>,
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
	Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
	CastMovie: ResolverTypeWrapper<CastMovie>;
	CollectionTranslate: ResolverTypeWrapper<CollectionTranslate>;
	CollectionTranslateData: ResolverTypeWrapper<CollectionTranslateData>;
	CrewMovie: ResolverTypeWrapper<CrewMovie>;
	Float: ResolverTypeWrapper<Scalars['Float']>;
	Genre: ResolverTypeWrapper<Genre>;
	Int: ResolverTypeWrapper<Scalars['Int']>;
	Keywords: ResolverTypeWrapper<Keywords>;
	LanguageEnum: LanguageEnum;
	Movie: ResolverTypeWrapper<Movie>;
	MovieCastResponse: ResolverTypeWrapper<MovieCastResponse>;
	MovieCrewResponse: ResolverTypeWrapper<MovieCrewResponse>;
	MovieDetails: ResolverTypeWrapper<MovieDetails>;
	MovieImageResponse: ResolverTypeWrapper<MovieImageResponse>;
	MoviesCollectionResponse: ResolverTypeWrapper<MoviesCollectionResponse>;
	MoviesCollectionTranslateResponse: ResolverTypeWrapper<MoviesCollectionTranslateResponse>;
	MoviesKeywordsResponse: ResolverTypeWrapper<MoviesKeywordsResponse>;
	MoviesResponse: ResolverTypeWrapper<MoviesResponse>;
	OptionsInput: OptionsInput;
	Person: ResolverTypeWrapper<Person>;
	PersonCastResponse: ResolverTypeWrapper<PersonCastResponse>;
	PersonCrewResponse: ResolverTypeWrapper<PersonCrewResponse>;
	PosterMovie: ResolverTypeWrapper<PosterMovie>;
	ProductionCompany: ResolverTypeWrapper<ProductionCompany>;
	ProductionCountry: ResolverTypeWrapper<ProductionCountry>;
	Query: ResolverTypeWrapper<{}>;
	RegionEnum: RegionEnum;
	String: ResolverTypeWrapper<Scalars['String']>;
	spoken_languages: ResolverTypeWrapper<Spoken_Languages>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
	Boolean: Scalars['Boolean'];
	CastMovie: CastMovie;
	CollectionTranslate: CollectionTranslate;
	CollectionTranslateData: CollectionTranslateData;
	CrewMovie: CrewMovie;
	Float: Scalars['Float'];
	Genre: Genre;
	Int: Scalars['Int'];
	Keywords: Keywords;
	Movie: Movie;
	MovieCastResponse: MovieCastResponse;
	MovieCrewResponse: MovieCrewResponse;
	MovieDetails: MovieDetails;
	MovieImageResponse: MovieImageResponse;
	MoviesCollectionResponse: MoviesCollectionResponse;
	MoviesCollectionTranslateResponse: MoviesCollectionTranslateResponse;
	MoviesKeywordsResponse: MoviesKeywordsResponse;
	MoviesResponse: MoviesResponse;
	OptionsInput: OptionsInput;
	Person: Person;
	PersonCastResponse: PersonCastResponse;
	PersonCrewResponse: PersonCrewResponse;
	PosterMovie: PosterMovie;
	ProductionCompany: ProductionCompany;
	ProductionCountry: ProductionCountry;
	Query: {};
	String: Scalars['String'];
	spoken_languages: Spoken_Languages;
}>;

export type CastMovieResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['CastMovie'] = ResolversParentTypes['CastMovie'],
> = ResolversObject<{
	adult?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
	cast_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	character?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	credit_id?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	gender?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	known_for_department?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	original_name?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	popularity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	profile_path?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CollectionTranslateResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['CollectionTranslate'] = ResolversParentTypes['CollectionTranslate'],
> = ResolversObject<{
	data?: Resolver<
		Maybe<ResolversTypes['CollectionTranslateData']>,
		ParentType,
		ContextType
	>;
	english_name?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	iso_639_1?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	iso_3166_1?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CollectionTranslateDataResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['CollectionTranslateData'] = ResolversParentTypes['CollectionTranslateData'],
> = ResolversObject<{
	homepage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	overview?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CrewMovieResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['CrewMovie'] = ResolversParentTypes['CrewMovie'],
> = ResolversObject<{
	adult?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
	credit_id?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	department?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	gender?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	job?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	known_for_department?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	original_name?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	popularity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	profile_path?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GenreResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Genre'] = ResolversParentTypes['Genre'],
> = ResolversObject<{
	id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type KeywordsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Keywords'] = ResolversParentTypes['Keywords'],
> = ResolversObject<{
	id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Movie'] = ResolversParentTypes['Movie'],
> = ResolversObject<{
	adult?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
	backdrop_path?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	genre_ids?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['Int']>>>,
		ParentType,
		ContextType
	>;
	id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	original_language?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	original_title?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	overview?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	popularity?: Resolver<
		Maybe<ResolversTypes['Float']>,
		ParentType,
		ContextType
	>;
	poster_path?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	release_date?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	video?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
	vote_average?: Resolver<
		Maybe<ResolversTypes['Float']>,
		ParentType,
		ContextType
	>;
	vote_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieCastResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['MovieCastResponse'] = ResolversParentTypes['MovieCastResponse'],
> = ResolversObject<{
	cast?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['CastMovie']>>>,
		ParentType,
		ContextType
	>;
	id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieCrewResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['MovieCrewResponse'] = ResolversParentTypes['MovieCrewResponse'],
> = ResolversObject<{
	crew?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['CrewMovie']>>>,
		ParentType,
		ContextType
	>;
	id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieDetailsResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['MovieDetails'] = ResolversParentTypes['MovieDetails'],
> = ResolversObject<{
	adult?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
	backdrop_path?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	budget?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	genre_ids?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['Int']>>>,
		ParentType,
		ContextType
	>;
	genres?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['Genre']>>>,
		ParentType,
		ContextType
	>;
	homepage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	imdb_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	original_language?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	original_title?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	overview?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	popularity?: Resolver<
		Maybe<ResolversTypes['Float']>,
		ParentType,
		ContextType
	>;
	poster_path?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	production_companies?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['ProductionCompany']>>>,
		ParentType,
		ContextType
	>;
	production_countries?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['ProductionCountry']>>>,
		ParentType,
		ContextType
	>;
	release_date?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	runtime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	spoken_languages?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['spoken_languages']>>>,
		ParentType,
		ContextType
	>;
	status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	tagline?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	video?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
	vote_average?: Resolver<
		Maybe<ResolversTypes['Float']>,
		ParentType,
		ContextType
	>;
	vote_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieImageResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['MovieImageResponse'] = ResolversParentTypes['MovieImageResponse'],
> = ResolversObject<{
	backdrops?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['PosterMovie']>>>,
		ParentType,
		ContextType
	>;
	id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	posters?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['PosterMovie']>>>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MoviesCollectionResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['MoviesCollectionResponse'] = ResolversParentTypes['MoviesCollectionResponse'],
> = ResolversObject<{
	backdrop_path?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	overview?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	parts?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['Movie']>>>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MoviesCollectionTranslateResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['MoviesCollectionTranslateResponse'] = ResolversParentTypes['MoviesCollectionTranslateResponse'],
> = ResolversObject<{
	id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	translations?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['CollectionTranslate']>>>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MoviesKeywordsResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['MoviesKeywordsResponse'] = ResolversParentTypes['MoviesKeywordsResponse'],
> = ResolversObject<{
	id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	keywords?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['Keywords']>>>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MoviesResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['MoviesResponse'] = ResolversParentTypes['MoviesResponse'],
> = ResolversObject<{
	page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
	results?: Resolver<
		Array<Maybe<ResolversTypes['Movie']>>,
		ParentType,
		ContextType
	>;
	total_pages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
	total_results?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PersonResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person'],
> = ResolversObject<{
	adult?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
	also_known_as?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['String']>>>,
		ParentType,
		ContextType
	>;
	biography?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	birthday?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	deathday?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	homepage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	imdb_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	known_for_department?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	place_of_birth?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	popularity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	profile_path?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PersonCastResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['PersonCastResponse'] = ResolversParentTypes['PersonCastResponse'],
> = ResolversObject<{
	cast?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['CastMovie']>>>,
		ParentType,
		ContextType
	>;
	id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PersonCrewResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['PersonCrewResponse'] = ResolversParentTypes['PersonCrewResponse'],
> = ResolversObject<{
	crew?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['CrewMovie']>>>,
		ParentType,
		ContextType
	>;
	id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PosterMovieResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['PosterMovie'] = ResolversParentTypes['PosterMovie'],
> = ResolversObject<{
	aspect_ratio?: Resolver<
		Maybe<ResolversTypes['Int']>,
		ParentType,
		ContextType
	>;
	file_path?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	iso_639_1?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	vote_average?: Resolver<
		Maybe<ResolversTypes['Float']>,
		ParentType,
		ContextType
	>;
	vote_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductionCompanyResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['ProductionCompany'] = ResolversParentTypes['ProductionCompany'],
> = ResolversObject<{
	id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	logo_path?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	origin_country?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductionCountryResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['ProductionCountry'] = ResolversParentTypes['ProductionCountry'],
> = ResolversObject<{
	iso_3166_1?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = ResolversObject<{
	castMovie?: Resolver<
		Maybe<ResolversTypes['MovieCastResponse']>,
		ParentType,
		ContextType,
		Partial<QueryCastMovieArgs>
	>;
	crewMovie?: Resolver<
		Maybe<ResolversTypes['MovieCrewResponse']>,
		ParentType,
		ContextType,
		Partial<QueryCrewMovieArgs>
	>;
	imagesMovie?: Resolver<
		Maybe<ResolversTypes['MovieImageResponse']>,
		ParentType,
		ContextType,
		Partial<QueryImagesMovieArgs>
	>;
	keywordsMovie?: Resolver<
		Maybe<ResolversTypes['MoviesKeywordsResponse']>,
		ParentType,
		ContextType,
		Partial<QueryKeywordsMovieArgs>
	>;
	movieDetails?: Resolver<
		Maybe<ResolversTypes['MovieDetails']>,
		ParentType,
		ContextType,
		Partial<QueryMovieDetailsArgs>
	>;
	moviesByCollection?: Resolver<
		Maybe<ResolversTypes['MoviesCollectionResponse']>,
		ParentType,
		ContextType,
		Partial<QueryMoviesByCollectionArgs>
	>;
	nowPlayingMovies?: Resolver<
		Maybe<ResolversTypes['MoviesResponse']>,
		ParentType,
		ContextType,
		Partial<QueryNowPlayingMoviesArgs>
	>;
	personCastByMovie?: Resolver<
		Maybe<ResolversTypes['PersonCastResponse']>,
		ParentType,
		ContextType,
		Partial<QueryPersonCastByMovieArgs>
	>;
	personCrewByMovie?: Resolver<
		Maybe<ResolversTypes['PersonCrewResponse']>,
		ParentType,
		ContextType,
		Partial<QueryPersonCrewByMovieArgs>
	>;
	personDetails?: Resolver<
		Maybe<ResolversTypes['Person']>,
		ParentType,
		ContextType,
		Partial<QueryPersonDetailsArgs>
	>;
	popularMovies?: Resolver<
		Maybe<ResolversTypes['MoviesResponse']>,
		ParentType,
		ContextType,
		Partial<QueryPopularMoviesArgs>
	>;
	similarMovie?: Resolver<
		Maybe<ResolversTypes['MoviesResponse']>,
		ParentType,
		ContextType,
		Partial<QuerySimilarMovieArgs>
	>;
	topRatedMovies?: Resolver<
		Maybe<ResolversTypes['MoviesResponse']>,
		ParentType,
		ContextType,
		Partial<QueryTopRatedMoviesArgs>
	>;
	translationsByCollection?: Resolver<
		Maybe<ResolversTypes['MoviesCollectionTranslateResponse']>,
		ParentType,
		ContextType,
		Partial<QueryTranslationsByCollectionArgs>
	>;
	upcomingMovies?: Resolver<
		Maybe<ResolversTypes['MoviesResponse']>,
		ParentType,
		ContextType,
		Partial<QueryUpcomingMoviesArgs>
	>;
}>;

export type Spoken_LanguagesResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['spoken_languages'] = ResolversParentTypes['spoken_languages'],
> = ResolversObject<{
	iso_639_1?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
	CastMovie?: CastMovieResolvers<ContextType>;
	CollectionTranslate?: CollectionTranslateResolvers<ContextType>;
	CollectionTranslateData?: CollectionTranslateDataResolvers<ContextType>;
	CrewMovie?: CrewMovieResolvers<ContextType>;
	Genre?: GenreResolvers<ContextType>;
	Keywords?: KeywordsResolvers<ContextType>;
	Movie?: MovieResolvers<ContextType>;
	MovieCastResponse?: MovieCastResponseResolvers<ContextType>;
	MovieCrewResponse?: MovieCrewResponseResolvers<ContextType>;
	MovieDetails?: MovieDetailsResolvers<ContextType>;
	MovieImageResponse?: MovieImageResponseResolvers<ContextType>;
	MoviesCollectionResponse?: MoviesCollectionResponseResolvers<ContextType>;
	MoviesCollectionTranslateResponse?: MoviesCollectionTranslateResponseResolvers<ContextType>;
	MoviesKeywordsResponse?: MoviesKeywordsResponseResolvers<ContextType>;
	MoviesResponse?: MoviesResponseResolvers<ContextType>;
	Person?: PersonResolvers<ContextType>;
	PersonCastResponse?: PersonCastResponseResolvers<ContextType>;
	PersonCrewResponse?: PersonCrewResponseResolvers<ContextType>;
	PosterMovie?: PosterMovieResolvers<ContextType>;
	ProductionCompany?: ProductionCompanyResolvers<ContextType>;
	ProductionCountry?: ProductionCountryResolvers<ContextType>;
	Query?: QueryResolvers<ContextType>;
	spoken_languages?: Spoken_LanguagesResolvers<ContextType>;
}>;
