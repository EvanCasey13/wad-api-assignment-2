import React, { createContext, useEffect, useReducer, useContext } from "react";
import { getUpcomingMovies } from "./api/movie-api";
import { AuthContext } from './AuthContext';

export const UpcomingMoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { movies: action.payload.result };
    default:
      return state;
  }
};

const UpcomingMoviesContextProvider = props => {
  const context = useContext(AuthContext);

  const [state, dispatch] = useReducer(reducer, { movies: []});

  useEffect(() => {
    getUpcomingMovies().then(result => {
      dispatch({ type: "load", payload: {result}});
    });
  },[context.isAuthenticated]);

  return (
    <UpcomingMoviesContext.Provider
      value={{
        movies: state.movies
      }}
    >
      {props.children}
    </UpcomingMoviesContext.Provider>
  );
};

export default UpcomingMoviesContextProvider