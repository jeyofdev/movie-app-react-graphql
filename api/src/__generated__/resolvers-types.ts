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

export type Movie = {
	__typename?: 'Movie';
	adult?: Maybe<Scalars['Boolean']>;
	backdrop_path?: Maybe<Scalars['String']>;
	genre_ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
	id?: Maybe<Scalars['Int']>;
	original_language?: Maybe<Scalars['String']>;
	original_title?: Maybe<Scalars['String']>;
	overview?: Maybe<Scalars['String']>;
	popularity?: Maybe<Scalars['Int']>;
	poster_path?: Maybe<Scalars['String']>;
	release_date?: Maybe<Scalars['String']>;
	title?: Maybe<Scalars['String']>;
	video?: Maybe<Scalars['Boolean']>;
	vote_average?: Maybe<Scalars['Int']>;
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

export type MoviesResponse = {
	__typename?: 'MoviesResponse';
	page: Scalars['Int'];
	results: Array<Maybe<Movie>>;
	total_pages: Scalars['Int'];
	total_results: Scalars['Int'];
};

export type Query = {
	__typename?: 'Query';
	castMovie?: Maybe<MovieCastResponse>;
	crewMovie?: Maybe<MovieCrewResponse>;
	movieDetails?: Maybe<Movie>;
	nowPlayingMovies?: Maybe<MoviesResponse>;
	popularMovies?: Maybe<MoviesResponse>;
	similarMovie?: Maybe<MoviesResponse>;
	topRatedMovies?: Maybe<MoviesResponse>;
	upcomingMovies?: Maybe<MoviesResponse>;
};

export type QueryCastMovieArgs = {
	movieId?: InputMaybe<Scalars['Int']>;
};

export type QueryCrewMovieArgs = {
	movieId?: InputMaybe<Scalars['Int']>;
};

export type QueryMovieDetailsArgs = {
	movieId?: InputMaybe<Scalars['Int']>;
};

export type QuerySimilarMovieArgs = {
	movieId?: InputMaybe<Scalars['Int']>;
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
	CrewMovie: ResolverTypeWrapper<CrewMovie>;
	Int: ResolverTypeWrapper<Scalars['Int']>;
	Movie: ResolverTypeWrapper<Movie>;
	MovieCastResponse: ResolverTypeWrapper<MovieCastResponse>;
	MovieCrewResponse: ResolverTypeWrapper<MovieCrewResponse>;
	MoviesResponse: ResolverTypeWrapper<MoviesResponse>;
	Query: ResolverTypeWrapper<{}>;
	String: ResolverTypeWrapper<Scalars['String']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
	Boolean: Scalars['Boolean'];
	CastMovie: CastMovie;
	CrewMovie: CrewMovie;
	Int: Scalars['Int'];
	Movie: Movie;
	MovieCastResponse: MovieCastResponse;
	MovieCrewResponse: MovieCrewResponse;
	MoviesResponse: MoviesResponse;
	Query: {};
	String: Scalars['String'];
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
	popularity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
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
		Maybe<ResolversTypes['Int']>,
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
	movieDetails?: Resolver<
		Maybe<ResolversTypes['Movie']>,
		ParentType,
		ContextType,
		Partial<QueryMovieDetailsArgs>
	>;
	nowPlayingMovies?: Resolver<
		Maybe<ResolversTypes['MoviesResponse']>,
		ParentType,
		ContextType
	>;
	popularMovies?: Resolver<
		Maybe<ResolversTypes['MoviesResponse']>,
		ParentType,
		ContextType
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
		ContextType
	>;
	upcomingMovies?: Resolver<
		Maybe<ResolversTypes['MoviesResponse']>,
		ParentType,
		ContextType
	>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
	CastMovie?: CastMovieResolvers<ContextType>;
	CrewMovie?: CrewMovieResolvers<ContextType>;
	Movie?: MovieResolvers<ContextType>;
	MovieCastResponse?: MovieCastResponseResolvers<ContextType>;
	MovieCrewResponse?: MovieCrewResponseResolvers<ContextType>;
	MoviesResponse?: MoviesResponseResolvers<ContextType>;
	Query?: QueryResolvers<ContextType>;
}>;
