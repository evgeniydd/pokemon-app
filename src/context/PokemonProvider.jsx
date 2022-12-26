import { PokemonContext } from './PokemonContext';
import { useState, useEffect } from 'react';
import axios from 'axios';

export function PokemonProvider({ children }) {
  const BASE_URL = 'https://pokeapi.co/api/v2/';

  const [allPokemons, setAllPokemons] = useState([]);
  const [globalPokemons, setGlobalPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPokemons, setfilteredPokemons] = useState([]);
  const [stats, setStats] = useState([{ hp: 0, attack: 0, defence: 0, sp_attack: 0, sp_defence: 0, speed: 0 }]);
  const [pokemon, setPokemon] = useState(0);
  const [theme, setTheme] = useState('pokemon-card grassBg');

  const getAllPokemons = async (limit = 10) => {
    const res = await axios(`${BASE_URL}pokemon?limit=${limit}&offset=${offset}`);
    const data = res.data.results;

    const promises = data.map(async (pokemon) => {
      const res = await axios(pokemon.url);
      const data = res.data;
      return data;
    });

    const results = await Promise.all(promises);
    console.log(results);
    setAllPokemons([...allPokemons, ...results]);
  };

  const getGlobalPokemons = async () => {
    const res = await axios(`${BASE_URL}pokemon?limit=905&offset=0`);
    const data = res.data.results;

    const promises = data.map(async (pokemon) => {
      const res = await axios(pokemon.url);
      const data = res.data;
      return data;
    });

    const results = await Promise.all(promises);
    console.log(results);
    setGlobalPokemons([...globalPokemons, ...results]);
  };

  const searchPokemon = (e) => {
    setSearchTerm(e.target.value);
  };

  const showMore = () => {
    setOffset(offset + 10);
    console.log(offset);
  };

  const getRandomPokemon = (min, max) => {
    setAllPokemons([]);
    setOffset(Math.floor(Math.random() * (max - min) + min));
  };

  const getReload = () => {
    setAllPokemons([]);
    setOffset(0);
    getAllPokemons();
  };

  const getItem = (someId, someType) => {
    let style = '';
    if (someType.length < 2) {
      style = `'pokemon_card' ${someType[0].type.name}Bg`;
    } else if (someType[0].type.name == 'normal') {
      style = `'pokemon_card' ${someType[1].type.name}Bg`;
    } else {
      style = `'pokemon_card' ${someType[0].type.name}Bg`;
    }

    setTheme(style);
    setPokemon(someId - 1);
  };

  useEffect(() => {
    getAllPokemons();
  }, [offset]);

  useEffect(() => {
    getGlobalPokemons();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        allPokemons,
        globalPokemons,
        offset,
        searchTerm,
        filteredPokemons,
        stats,
        searchPokemon,
        showMore,
        getRandomPokemon,
        getItem,
        pokemon,
        theme,
        getReload,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export default PokemonProvider;
