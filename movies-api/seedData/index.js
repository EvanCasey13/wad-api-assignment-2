import userModel from '../api/users/userModel';
import users from './users';
import genreModel from '../api/genres/genreModel';
import genres from './genres'
import dotenv from 'dotenv';
import movieModel from '../api/movies/movieModel';
import movies from './movies.js';
import actorModel from '../api/actors/actorModel';
import actors from './actors.js';
import showModel from '../api/shows/showModel';
import shows from './shows.js';
import uMovieModel from '../api/upcomingmovies/uMovieModel';
import upcomingMovies from './upcomingMovies.js'

dotenv.config();

// deletes all movies documents in collection and inserts test data
export async function loadMovies() {
  console.log('load seed data');
  console.log(movies.length);
  try {
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(movies);
    console.info(`${movies.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

// deletes all user documents in collection and inserts test data
async function loadUsers() {
  console.log('load user Data');
  try {
    await userModel.deleteMany();
    await users.forEach(user => userModel.create(user));
    console.info(`${users.length} users were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load user Data: ${err}`);
  }
}

// deletes all genre documents in collection and inserts test data
async function loadGenres() {
  console.log('load genre Data');
  try {
    await genreModel.deleteMany();
    await genreModel.collection.insertMany(genres);
    console.info(`${genres.length} genres were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load genre Data: ${err}`);
  }
}

// deletes all actor documents in collection and inserts test data
async function loadActors() {
  console.log('load actor Data');
  try {
    await actorModel.deleteMany();
    await actorModel.collection.insertMany(actors);
    console.info(`${actors.length} actors were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load actor Data: ${err}`);
  }
}

// deletes all shows documents in collection and inserts test data
async function loadShows() {
  console.log('load show Data');
  try {
    await showModel.deleteMany();
    await showModel.collection.insertMany(shows);
    console.info(`${shows.length} shows were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load show Data: ${err}`);
  }
}

// deletes all upcoming movies documents in collection and inserts test data
async function loadUpcomingMovies() {
  console.log('load upcoming movies Data');
  try {
    await uMovieModel.deleteMany();
    await uMovieModel.collection.insertMany(upcomingMovies);
    console.info(`${upcomingMovies.length} upcoming movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load upcoming movies Data: ${err}`);
  }
}

if (process.env.SEED_DB) {
  loadUsers();
  loadGenres();
  loadMovies();
  loadActors();
  loadShows();
  loadUpcomingMovies();
}