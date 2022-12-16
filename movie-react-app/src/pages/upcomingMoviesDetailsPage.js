import React, { useState, useContext } from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getUpcomingMovie } from '../api/movie-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import SiteHeader from './../components/siteHeader'

const UpcomingMoviePage = (props) => {

  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id }],
    getUpcomingMovie
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {movie ? (
        <><SiteHeader />
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default UpcomingMoviePage;