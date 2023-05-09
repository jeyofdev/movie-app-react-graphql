import { gql } from '@apollo/client';

const GET_POPULAR_MOVIES = gql`
	query PopularMovies($options: OptionsInput) {
		popularMovies(options: $options) {
			page
			total_pages
			total_results
			results {
				id
				title
				release_date
				overview
				popularity
			}
		}
	}
`;

export default GET_POPULAR_MOVIES;
