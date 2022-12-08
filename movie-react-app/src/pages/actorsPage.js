import React, { useContext } from "react";
import { ActorsContext } from "../actorsContext"
import PageTemplate from '../components/templateActorListPage'
import SiteHeader from './../components/siteHeader'

const ActorPopularPage = (props) => {
  const context = useContext(ActorsContext);
  let actors = "";

  if (context.actors) {
    actors = (
      <div>
        {context.actors.map(actor => { return <>{actor.id},{actor.name}<br /></> })}
      </div>
    )
  }
  else {
    actors = (
      <div>
        Actors are loading
      </div>
    )
  }

  return (
    <div className="actorpage">
      <SiteHeader />
    <PageTemplate
      title="Discover Actors"
      actors={actors}
    />
  </div>
    );
};
export default ActorPopularPage;