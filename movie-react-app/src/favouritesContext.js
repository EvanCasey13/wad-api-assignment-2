import React, { createContext, useEffect, useReducer, useContext } from "react";
import { getFavouriteMovies } from "./api/movie-api";
import { AuthContext } from './AuthContext';

export const FavouritesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { movies: action.payload.result };
    default:
      return state;
  }
};

const FavouritesContextProvider = props => {
  const context = useContext(AuthContext);

  const [state, dispatch] = useReducer(reducer, { movies: []});

  useEffect(() => {
    getFavouriteMovies(context.userName).then(result => {
      dispatch({ type: "load", payload: {result}});
    });
  }, [state.movies, context.userName]);

  return (
    <FavouritesContext.Provider
      value={{
        movies: state.movies
      }}
    >
      {props.children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContextProvider