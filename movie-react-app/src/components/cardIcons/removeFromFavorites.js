import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { AuthContext } from '../../AuthContext';

const RemoveFromFavoritesIcon = ({ movie }) => {
  const context = useContext(AuthContext);

  const handleRemoveFromFavorites = (e) => {
    e.preventDefault();
    context.removeFavourite(context.userName, movie.id);
  };
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromFavorites}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromFavoritesIcon;