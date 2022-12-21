# Assignment 2 - Web API.

Name: Evan Casey

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)

 + Authentication
 + Actors & details endpoints
 + Upcoming movies endpoint
 + Shows and details endpoints
 + Create, read and delete user favourites
 + Create and read user reviews for movies (can be seen through postman)

## Setup requirements.

## API Configuration

Describe any configuration that needs to take place before running the API. For example, creating an `.env` file and what variables to put in it. Give an example of how this might be done.

NODE_ENV=development
PORT=8080
HOST=localhost
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret

## API Design
Give an overview of your web API design, perhaps similar to the following: 

## Endpoints

- /api/movies | GET | Gets a list of movies 
- /api/movies/{movieid} | GET | Gets a single movie 
- /api/upcoming | GET | Gets a list of upcoming movies 
- /api/upcoming/{id} | GET | Get a single upcoming movie
- /api/genres | GET | Get genres
- /api/actors | GET | Get all actors
- /api/actors/{id} | GET | Get a single actor
- /api/shows | GET | Get all shows
- /api/shows/{id} | GET | Get a single show
- /api/users | GET | Get all users
- /api/users/{id} | GET | Get a single user
- /api/users | POST | Register/Authenticate users
- /api/users/{username}/favourites | POST | Add favourite movies to user objects nested favourites array
- /api/users/{username}/favourites | DELETE | Delete favourite movies from the user objects nested favourites array
- /api/users/{username}/favourites | GET | Get all of a users favourite movies
- /api/reviews/{username}/movie/${movie.id}/reviews | POST | Add review for movie to nested reviews array in the movie object
- /api/{id}/reviews | GET | Get all of a reviews for a movies

If you have your API design on an online platform or graphic, My [Swaggerhub](https://app.swaggerhub.com/apis/EVANCASEY2003/Movie-API/1.0.0)).

## Security and Authentication

Give details of authentication/security implemented on the API (e.g. passport/sessions). Indicate which routes are protected.

This application makes use of JWT Authentication to handle any user sessions and functions such as viewing movies, details, adding favourite or creating reviews for a movie. All routes of this application are protected except the registration and login routes to allow for users to create an account to gain access to the application.

## Integrating with React App

I integrated my React app to use all data taken from the API I developed for movies, shows, actors etc, the majority of views use only data from my API. The only data being received from TMDB API is poster images. All favourites are saved to a favourites array located in the user object of the mongo database, this is also the case for the reviews which are stored in a reviews array for each of the movies. This is demonstrated in the demo video for this assignment.

## Independent learning (if relevant)

Briefly explain any non-standard features developed for the app.   

The major non standard feature I developed to support this app was Swaggerhub documentation for the API I created, this helped me to gain a better understanding of how API documentation is constructed & what makes good or bad documentation when trying to convey the functionality of an API. Some of the resources I used to gain a better understanding of the created of the documentation are listed below.

Basics - https://support.smartbear.com/swaggerhub/docs/tutorials/getting-started.html

Creating API - https://support.smartbear.com/swaggerhub/docs/apis/creating-api.html

SwaggerHub Documentation - https://support.smartbear.com/swaggerhub/docs/