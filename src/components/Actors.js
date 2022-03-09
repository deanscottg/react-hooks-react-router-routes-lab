import React from "react";
import { actors } from "../data";

const Actors = () => {
  const listActors = actors.map((actor)=> (
    <div key={actor.name}>
      <h1> Name:{actor.name}</h1>
        <ul>
          {actor.movies.map((movie)=>
          <li key={movie}>{movie}</li>
          )}
        </ul>

      
    </div>
    

  ))
  return <div>
    <h1>Actors</h1>
    {listActors}
  </div>;
}

export default Actors;
