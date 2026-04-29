import { useEffect, useState } from "react";
import { fetchPokemonPage, fetchPokemonsByType } from "../services/api";

const LIMIT = 20;

const usePokemonList = (selectedType) => {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [error, setError] = useState(null);

  const loadPokemon = async () => {
    setLoading(true);
    setError(null);

    try {
      if (selectedType === "All") {
        const res = await fetchPokemonPage(offset, LIMIT);

        setPokemon(res.pokemon);
        setTotalCount(res.count);

      } else {
        const res = await fetchPokemonsByType(
          selectedType.toLowerCase(),
          offset,
          LIMIT
        );

        setPokemon(res.pokemon);
        setTotalCount(res.total);
      }

    } catch (err) {
      console.error(err);
      setError("Failed to load Pokémon");
    } finally {
      setLoading(false);
    }
  };

  //  reload when offset or type changes
  useEffect(() => {
    loadPokemon();
  }, [offset, selectedType]);

  //  reset page when type changes
  useEffect(() => {
    setOffset(0);
  }, [selectedType]);

  // pagination controls
  const nextPage = () => {
    if (offset + LIMIT < totalCount) {
      setOffset((prev) => prev + LIMIT);
    }
  };

  const prevPage = () => {
    setOffset((prev) => Math.max(prev - LIMIT, 0));
  };

  // calculations
  const currentPage = Math.floor(offset / LIMIT) + 1;
  const totalPages = Math.ceil(totalCount / LIMIT);

  const hasNext = offset + LIMIT < totalCount;
  const hasPrev = offset > 0;

  return {
    pokemon,
    loading,
    error,
    nextPage,
    prevPage,
    offset,
    setOffset,
    currentPage,
    totalPages,
    hasNext,
    hasPrev,
  };
};

export default usePokemonList;