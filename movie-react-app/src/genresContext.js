import React, { createContext, useEffect, useReducer, useContext } from "react";
import { getGenres } from "./api/movie-api";
import { AuthContext } from './AuthContext';

export const GenresContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { genres: action.payload.result };
    default:
      return state;
  }
};

const GenresContextProvider = props => {
  const context = useContext(AuthContext);

  const [state, dispatch] = useReducer(reducer, { genres: []});

  useEffect(() => {
    getGenres().then(result => {
      dispatch({ type: "load", payload: {result}});
    });
  },[context.isAuthenticated]);

  return (
    <GenresContext.Provider
      value={{
        genres: state.genres
      }}
    >
      {props.children}
    </GenresContext.Provider>
  );
};

export default GenresContextProvider