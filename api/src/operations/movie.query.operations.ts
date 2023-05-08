const moviesQueryOperations = {
	details: `
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
      }
    }
  `,

	popular: `
    query PopularMovies($options: OptionsInput) {
      popularMovies(options: $options) {
        page
        total_pages
        total_results
        results {
          id
          title
          release_date
          original_title
          overview
          vote_count
          vote_average
          video
          poster_path
          popularity
          original_language
          genre_ids
          backdrop_path
          adult
        }
      }
    }
  `,

	nowPlaying: `
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
        }
      }
    }
  `,

	upcoming: `
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
        }
      }
    }
  `,

	topRating: `
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
        }
        total_pages
        total_results
      }
    }
  `,

	cast: `
    query CastMovie($movieId: Int, $options: OptionsInput) {
      castMovie(movieId: $movieId, options: $options) {
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
  `,

	crew: `
    query CrewMovie($movieId: Int, $options: OptionsInput) {
      crewMovie(movieId: $movieId, options: $options) {
        crew {
          adult
          gender
          id
          known_for_department
          name
          original_name
          popularity
          profile_path
          credit_id
          department
          job
        }
        id
      }
    }
  `,
};

export default moviesQueryOperations;
