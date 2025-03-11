import { useEffect, useState, useCallback } from "react";
import axios from "axios";

interface Pokemon {
  name: string;
  sprite: string;
}

export const useFetchPokemon = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemon = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100");
      const pokemonResults = response.data.results;

      // Параллельный запрос на детали покемонов
      const detailedPokemon = await Promise.all(
        pokemonResults.map(async (p: { name: string; url: string }) => {
          const details = await axios.get(p.url);
          return {
            name: p.name,
            sprite: details.data.sprites.front_default,
          };
        })
      );

      setPokemonList(detailedPokemon);
    } catch (error) {
      console.error("❌ Error fetching Pokémon:", error);
      setError("Failed to fetch Pokémon. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPokemon();
  }, [fetchPokemon]);

  return { pokemonList, loading, error };
};
