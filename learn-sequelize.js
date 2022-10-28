const { Genre, Movie, Actor } = require("./models");

/*
  Write a function that creates a new Genre in the database
  - currently, the genre table has 3 entries: Action, Comedy, and Drama
  - add one more Genre of your choice
  - duplicate entries are not allowed (try it to learn about errors)
*/
function insertNewGenre() {
  return Genre.create({name: "horror"});
}

/*
  Write a function that creates a new Movie in the database
  - currently, there are 5 movies
  - add one more Movie of your choice.
  - the movie CANNOT be from year 2008 (try it to learn about errors)
*/
function insertNewMovie() {
  return Movie.create({title: "Nope", year: 2022});
}

/*
  Write a function that returns the title of the movie with ID=2
*/
async function getMovieWithId2() {
  const result = await(Movie.findOne({
    where: {
      id : 2
    }
  }));
  return result.title;
}

/*
  Write a function that returns an array of all the actor names
*/
async function getAllActors() {
  const result = await (Actor.findAll({
    attributes: ["name"]
  }));
  const names = new Array(result.length);
  for(let i = 0; i < result.length; i++){
    names[i] = result[i].name;
  }
  return names;
}

/*
  Write a function that returns an array of all the movie titles from 2008
*/
async function getAllMoviesFrom2008() {
  const result = await Movie.findAll({
    where: {
      year: 2008
    }
  });
  const movies = new Array(result.length);
  for(let i = 0; i < movies.length; i++){
    movies[i] = result[i].title;
  }
  return movies;
}

/*
  Write a function that deletes the genre you added in the first function: insertNewGenre()
*/
async function deleteGenreYouAdded() {
  const genre = await Genre.findOne({
    where: {
      name: "horror"
    }
  });
  return genre.destroy();
}

/*
  Write a function that associates:
  - the actor "Rosario Dawson" with the movie "Eagle Eye"
  - the actor and movie record already exist in the database
  - add the association record to the database
*/
async function associateRosarioToEagleEye() {

  const actor = await Actor.findOne({
    where: {
      name: "Rosario Dawson"
    }
  });
  const movie = await Movie.findOne({
    where: {
      title: "Eagle Eye"
    }
  });
 
  return actor.addMovie(movie);
}

/*
  Write a function that associates:
  - the actor "Robert Downey Jr." with the movie "Tropic Thunder"
  - the actor and movie record already exist in the database
  - add the association record to the database
*/
async function associateRobertToTropicThunder() {
  const actor = await Actor.findOne({
    where: {
      name: "Robert Downey Jr."
    }
  });
  const movie = await Movie.findOne({
    where: {
      title: "Tropic Thunder"
    }
  });
 
  return actor.addMovie(movie);
}

module.exports = {
  insertNewGenre,
  insertNewMovie,
  getMovieWithId2,
  getAllActors,
  getAllMoviesFrom2008,
  deleteGenreYouAdded,
  associateRosarioToEagleEye,
  associateRobertToTropicThunder,
};
