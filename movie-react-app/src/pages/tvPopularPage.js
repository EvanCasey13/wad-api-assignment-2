import React, { useState, useContext } from "react";
import PageTemplate from '../components/templateShowListPage'
import SiteHeader from './../components/siteHeader'
import { ShowsContext } from "../showsContext"

const TvPopularPage = (props) => {
  const context = useContext(ShowsContext);
  let shows = "";

  if (context.shows) {
    shows = (
      <div>
        {context.shows.map(show => { return <>{show.id},{show.name}<br /></> })}
      </div>
    )
  }
  else {
    shows = (
      <div>
        Shows are loading
      </div>
    )
  }
  
  return (
    <div className="tvpopularpage">
      <SiteHeader />
    <PageTemplate
      title="Discover TV Shows"
      shows={shows}
    />
  </div>
    );
};
export default TvPopularPage;