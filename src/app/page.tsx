"use client"

import NavBar from "./components/NavBar";
import PokemonCard from "./components/PokemonCard";
import json_object from "./poke-json.json"

export default function Home() {

  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <div className="row">
          
          {json_object.map((element) => {
            return (
              <div className="col">
                <PokemonCard id={element.id} name={element.name} imageUrl={element.sprites.front_default} />
              </div>
            )})}

        </div>
      </div>
    </>
  )
}
