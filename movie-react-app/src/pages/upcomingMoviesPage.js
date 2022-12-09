import React, { useState, useContext } from "react";
import { UpcomingMoviesContext } from "../upcomingMoviesContext"
import PageTemplate from '../components/templateUpcomingMovieListPage';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import SiteHeader from './../components/siteHeader'

const UpcomingMoviesPage = (props) => {
  const context = useContext(UpcomingMoviesContext);
  let movies = "";

  if (context.movies) {
    movies = (
      <div>
        {context.movies.map(movie => { return <>{movie.id},{movie.name}<br /></> })}
      </div>
    )
  }
  else {
    movies = (
      <div>
        Upcoming Movies are loading
      </div>
    )
  }

  return (
    <div className="upcomingpage">
      <SiteHeader />
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
  </div>
);

};
export default UpcomingMoviesPage;