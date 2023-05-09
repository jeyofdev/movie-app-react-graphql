const keywordsQueryOperations = {
	moviesByKeyword: `
    query MoviesByKeyword($keywordId: Int, $options: OptionsInput) {
      moviesByKeyword(keywordId: $keywordId, options: $options) {
        id
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
};

export default keywordsQueryOperations;
