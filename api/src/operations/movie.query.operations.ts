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
};

export default moviesQueryOperations;
