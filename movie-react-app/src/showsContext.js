import React, { createContext, useEffect, useReducer, useContext } from "react";
import { getAllShows } from "./api/movie-api";
import { AuthContext } from './AuthContext';

export const ShowsContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { shows: action.payload.result };
    default:
      return state;
  }
};

const ShowsContextProvider = props => {
  const context = useContext(AuthContext);

  const [state, dispatch] = useReducer(reducer, { shows: []});

  useEffect(() => {
    getAllShows().then(result => {
      dispatch({ type: "load", payload: {result}});
    });
  },[context.isAuthenticated]);

  return (
    <ShowsContext.Provider
      value={{
        shows: state.shows
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowsContextProvider