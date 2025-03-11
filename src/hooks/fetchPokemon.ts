
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Pokemon {
    name:string;
    sprite: string;
}

export const fetchPokemon = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);


  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
        const pokemonResults = response.data.results;
         
        // Отримуємо детальні дані про кожного покемона
        const detailedPokemon = await Promise.all(
            pokemonResults.map(async (p: { name: string; url: string }) => {
              const details = await axios.get(p.url);
              return {
                name: p.name,
                sprite: details.data.sprites.front_default
              };
            })
          );
          setPokemonList(detailedPokemon);
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      }
    };
    fetchPokemon();
  }, []);

  return {pokemonList} ;
};