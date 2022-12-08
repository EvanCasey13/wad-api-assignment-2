import React, { createContext, useEffect, useReducer, useContext } from "react";
import { getAllActors } from "./api/movie-api";
import { AuthContext } from './AuthContext';

export const ActorsContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { actors: action.payload.result };
    default:
      return state;
  }
};

const ActorsContextProvider = props => {
  const context = useContext(AuthContext);

  const [state, dispatch] = useReducer(reducer, { actors: []});

  useEffect(() => {
    getAllActors().then(result => {
      dispatch({ type: "load", payload: {result}});
    });
  },[context.isAuthenticated]);

  return (
    <ActorsContext.Provider
      value={{
        actors: state.actors
      }}
    >
      {props.children}
    </ActorsContext.Provider>
  );
};

export default ActorsContextProvider