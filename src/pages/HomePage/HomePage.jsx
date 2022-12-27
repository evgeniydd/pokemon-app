import React from 'react';
import styles from './HomePage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars, faShuffle, faRotateRight, faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { PokemonContext } from '../../context/PokemonContext';
import PokemonList from '../../components/PokemonList/PokemonList';

const HomePage = () => {
  const { searchTerm, searchPokemon, getRandomPokemon, getReload, showMore } = useContext(PokemonContext);
  return (
    <div className='app'>
      <div className='app-container'>
        <div>
          <header>
            <div className={styles.header_wrap}>
              <div className={styles.header_title}>Your Pokedex</div>
              <div className={styles.burger_menu}>
                <FontAwesomeIcon icon={faBars} />
              </div>
            </div>
            <form>
              <div className={styles.search_input}>
                <FontAwesomeIcon className={styles.search_icon} icon={faMagnifyingGlass} />
                <input type='text' placeholder='Type to search...' value={searchTerm} onChange={searchPokemon} />
              </div>
            </form>
            <div className={styles.btns}>
              <FontAwesomeIcon onClick={() => getReload()} className={styles.options_btn} icon={faRotateRight} />
              <FontAwesomeIcon
                className={styles.options_btn}
                onClick={() => getRandomPokemon(1, 905)}
                style={{ margin: '10px', padding: '10px 0' }}
                icon={faShuffle}
              />
            </div>
          </header>

          <PokemonList />
          <div onClick={showMore} className={styles.navbar} style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon style={{ color: 'gray' }} icon={faAnglesDown} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
