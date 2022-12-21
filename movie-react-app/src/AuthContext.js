import React, { createContext, useState } from "react";
import { login, signup, addFavouriteMovie, removeFavouriteMovie} from "./api/movie-api";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
  const existingToken = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(existingToken);
  const [userName, setUserName] = useState("");

  //Function to put JWT token in local storage.
  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  }

  const authenticate = async (username, password) => {
    const result = await login(username, password);
    if (result.token) {
      setToken(result.token)
      setIsAuthenticated(true);
      setUserName(username);
    }
  };

  const register = async (username, password) => {
    const result = await signup(username, password);
    console.log(result.code);
    return (result.code == 201) ? true : false;
  };

  const addFavourite = async (username, movie) => {
    const result = await addFavouriteMovie(username, movie);
    return (result.code == 200) ? true : false;
  };

  const removeFavourite = async (username, movie) => {
    const result = await removeFavouriteMovie(username, movie);
    return (result.code == 200) ? true : false;
  };

  const signout = () => {
    setTimeout(() => setIsAuthenticated(false), 100);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        register,
        signout,
        addFavourite,
        removeFavourite,
        userName
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;