import React from "react";
import PokemonCard from "./PokemonCard";

export default function PokeGrid({
  pokemonList,
  onCardClick,
  toggleFavorite,
  isFavorite,
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {pokemonList.map((pokemon, index) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onClick={onCardClick}
          toggleFavorite={toggleFavorite}
          isFavorite={isFavorite}
          index={index}
        />
      ))}
    </div>
  );
}

