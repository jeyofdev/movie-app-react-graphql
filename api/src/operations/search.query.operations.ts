const searchMoviesQueryOperations = {
	searchMovies: `
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
  `,
};

export default searchMoviesQueryOperations;
