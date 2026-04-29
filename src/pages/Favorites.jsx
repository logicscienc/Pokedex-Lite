import useFavorites from "../hooks/useFavorites";
import PokemonGrid from "../components/pokemon/PokeGrid";

const Favorites = () => {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="p-6">
      <h1 className="text-white text-2xl mb-6">Your Favorites</h1>

      {favorites.length === 0 ? (
        <p className="text-gray-400">No favorites yet</p>
      ) : (
        <PokemonGrid
          pokemonList={favorites}
          toggleFavorite={toggleFavorite}
          isFavorite={isFavorite}
        />
      )}
    </div>
  );
};

export default Favorites;