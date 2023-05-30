const personsQueryOperations = {
	details: `
    query PersonDetails($personId: Int, $options: OptionsInput) {
      personDetails(personId: $personId, options: $options) {
        birthday
        known_for_department
        deathday
        id
        name
        also_known_as
        gender
        biography
        popularity
        place_of_birth
        profile_path
        adult
        imdb_id
        homepage
      }
    }
  `,

	castByMovie: `
    query PersonCastByMovie($personId: Int, $options: OptionsInput) {
      personCastByMovie(personId: $personId, options: $options) {
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

	crewByMovie: `
    query PersonCrewByMovie($options: OptionsInput, $personId: Int) {
      personCrewByMovie(options: $options, personId: $personId) {
        id
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
      }
    }
  `,

	moviesByCastPerson: `
    query MoviesByCastPerson($personId: Int, $options: OptionsInput) {
      moviesByCastPerson(personId: $personId, options: $options) {
        cast {
          adult
          backdrop_path
          genre_ids
          id
          genres {
            id
            name
          }
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
        }
      }
    }
  `,
};

export default personsQueryOperations;
