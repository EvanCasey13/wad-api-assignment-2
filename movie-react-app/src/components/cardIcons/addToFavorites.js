import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import { AuthContext } from '../../AuthContext';
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToFavoritesIcon = ({ movie }) => {
  const context = useContext(AuthContext);

  const addFavouriteMovie = (e) => {
    e.preventDefault();
    context.addFavourite(context.userName, movie.id);
 };

  return (
    <IconButton aria-label="add to favorites" onClick={addFavouriteMovie}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavoritesIcon;