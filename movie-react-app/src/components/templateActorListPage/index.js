import React, { useState, useContext  } from "react";
import Header from "../headerMovieList";
import ActorList from "../actorList";
import Grid from "@mui/material/Grid";
import { ActorsContext } from "../../actorsContext";

function ActorListPageTemplate({ actors, name, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);
  const context = useContext(ActorsContext);

  let displayedActors = context.actors
    ?.filter((a) => {
      return a.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    ?.filter((a) => {
      return genreId > 0 ? a.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header name={name} />
      </Grid>
      <Grid item container spacing={5}>
        <ActorList action={action} actors={displayedActors}></ActorList>
      </Grid>
    </Grid>
  );
}
export default ActorListPageTemplate;