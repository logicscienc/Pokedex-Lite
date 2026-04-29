const BASE_URL = "https://pokeapi.co/api/v2";

export const fetchPokemonPage = async (start = 0, limit = 20) => {
  const res = await fetch(`${BASE_URL}/pokemon?offset=${start}&limit=${limit}`);
  
  if (!res.ok) throw new Error("Failed to fetch pokemon list");

  const data = await res.json();

  // Fetch details for each pokemon
  const detailed = await Promise.all(
    data.results.map(async (p) => {
      const res = await fetch(p.url);
      const d = await res.json();

      return {
        id: d.id,
        name: d.name,
        image: d.sprites.other["official-artwork"].front_default || d.sprites.front_default,
        types: d.types.map((t) => t.type.name),

        stats: d.stats,
        abilities: d.abilities,
        height: d.height,
        weight: d.weight,
      };
    })
  );

  return {
    pokemon: detailed,
    next: data.next,
    prev: data.previous,
    count: data.count,
  };
};


export const fetchPokemonsByType = async (type, offset = 0, limit = 20) => {
  const res = await fetch(`${BASE_URL}/type/${type}`);

  if (!res.ok) throw new Error("Failed to fetch by type");

  const data = await res.json();

  const allPokemon = data.pokemon;

 
  const paginated = allPokemon.slice(offset, offset + limit);

  const detailed = await Promise.all(
    paginated.map(async (p) => {
      const res = await fetch(p.pokemon.url);
      const d = await res.json();

      return {
        id: d.id,
        name: d.name,
        image:
          d.sprites.other["official-artwork"].front_default ||
          d.sprites.front_default,
        types: d.types.map((t) => t.type.name),
        stats: d.stats,
        abilities: d.abilities,
        height: d.height,
        weight: d.weight,
      };
    })
  );

  return {
    pokemon: detailed,
    total: allPokemon.length, 
  };
};