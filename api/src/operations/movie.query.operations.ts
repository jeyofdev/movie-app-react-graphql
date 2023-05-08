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
    }
  }
  `,
};

export default moviesQueryOperations;
