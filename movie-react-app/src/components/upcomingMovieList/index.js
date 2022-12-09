import React, { useContext } from "react";
import Movie from "../movieCard";
import Grid from "@mui/material/Grid";
import { UpcomingMoviesContext } from "../../upcomingMoviesContext";

const UpcomingMovieList = ( { action }) => {
  const context = useContext(UpcomingMoviesContext);
    let movieCards = context.movies?.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Movie key={m.id} movie={m} action={action} />
    </Grid>
  ));
  return movieCards;
};

export default UpcomingMovieList;