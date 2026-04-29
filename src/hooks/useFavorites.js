import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useFavorites() {
  const [favorites, setFavorites] = useState([]);
  const [loaded, setLoaded] = useState(false); 

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
    setLoaded(true); 
  }, []);

  // Save ONLY after loading is done
  useEffect(() => {
    if (loaded) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites, loaded]);

  const toggleFavorite = (pokemon) => {
    setFavorites((prev) => {
      const exists = prev.find((p) => p.id === pokemon.id);

      if (exists) {
         toast.success("Removed from favorites 💔");
        return prev.filter((p) => p.id !== pokemon.id);
      } else {
          toast.success("Added to favorites ❤️");
        return [...prev, pokemon];
      }
    });
  };

  const isFavorite = (id) => {
    return favorites.some((p) => p.id === id);
  };

  return { favorites, toggleFavorite, isFavorite };
}