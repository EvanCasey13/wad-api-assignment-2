import React, { useContext, useState } from "react";
import { Navigate } from 'react-router-dom';
import PageTemplate from "../components/templateFavouriteListPage";
import { FavouritesContext } from "../favouritesContext"; 
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import WriteReview from "../components/cardIcons/writeReview";
import SiteHeader from './../components/siteHeader'

const FavoriteMoviesPage = () => {

  const context = useContext(FavouritesContext);
  let favourites = "";
  
  context.favourites?.map(movie => { return <>{movie}, {movie.id}<br /></> })
  
  return (
    <div>
    <SiteHeader />
    <PageTemplate
      title="Favorite Movies"
      movies={favourites}
      action={(movie) => {
        return (
          <>
            <RemoveFromFavorites movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
    </div>
  );
};

export default FavoriteMoviesPage;