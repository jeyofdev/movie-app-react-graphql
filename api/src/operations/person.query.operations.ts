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
};

export default personsQueryOperations;
