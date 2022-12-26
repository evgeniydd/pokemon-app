import React from 'react';
import styles from './PokemonList.module.css';
import PokemonItem from '../PokemonItem/PokemonItem';
import { PokemonContext } from '../../context/PokemonContext';
import { useContext } from 'react';

const PokemonList = () => {
  const { searchTerm, allPokemons, globalPokemons, showMore, getRandomPokemon } = useContext(PokemonContext);
  return (
    <div className={styles.pokemon_list}>
      {searchTerm != ''
        ? globalPokemons
            .filter((val) => {
              if (searchTerm == '') {
                return val;
              } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val;
              }
            })
            .map((pokemon, index) => (
              <PokemonItem
                key={index}
                name={pokemon.name}
                id={pokemon.id}
                type={pokemon.types}
                img={pokemon.sprites.other['official-artwork'].front_default}
              />
            ))
        : allPokemons.map((pokemon, index) => (
            <PokemonItem
              key={index}
              name={pokemon.name}
              id={pokemon.id}
              type={pokemon.types}
              img={pokemon.sprites.other['official-artwork'].front_default}
            />
          ))}

      <button onClick={showMore}>Show more</button>
    </div>
  );
};

export default PokemonList;
