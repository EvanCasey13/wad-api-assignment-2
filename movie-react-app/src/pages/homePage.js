import React, { useContext } from "react";
import { MoviesContext } from "../moviesContext";
import PageTemplate from '../components/templateMovieListPage';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import SiteHeader from './../components/siteHeader'

const HomePage = (props) => {
  const context = useContext(MoviesContext);
  let movies = "";

  if (context.movies) {
    movies = (
      <div>
        {context.movies.map(movie => { return <>{movie.id},{movie.title}<br /></> })}
      </div>
    )
  }
  else {
    movies = (
      <div>
        Movies are loading
      </div>
    )
  }

  return (
    <div className="homepage">
      <SiteHeader />
      <PageTemplate
        title="Discover Movies"
        movies={movies}
        action={(movie) => {
          return <AddToFavoritesIcon movie={movie} />
        }}
      />
    </div>
  );
};
export default HomePage;