const collectionsQueryOperations = {
	moviesByCollection: `
    query MoviesByCollection($collectionId: Int, $options: OptionsInput) {
      moviesByCollection(collectionId: $collectionId, options: $options) {
        backdrop_path
        id
        name
        overview
        parts {
          id
          title
          overview
          vote_count
          vote_average
          video
          release_date
          poster_path
          popularity
          original_title
          original_language
          genre_ids
          backdrop_path
          adult
        }
      }
    }
  `,

	translationsByCollection: `
    query TranslationsByCollection($options: OptionsInput, $collectionId: Int) {
      translationsByCollection(options: $options, collectionId: $collectionId) {
        translations {
          iso_3166_1
          iso_639_1
          name
          english_name
          data {
            title
            overview
            homepage
          }
        }
        id
      }
    }
  `,
};

export default collectionsQueryOperations;
