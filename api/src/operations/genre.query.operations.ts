const genresQueryOperations = {
	genres: `
    query Genres($options: OptionsInput) {
      genres(options: $options) {
        genres {
          id
          name
        }
      }
    }
  `,
};

export default genresQueryOperations;
