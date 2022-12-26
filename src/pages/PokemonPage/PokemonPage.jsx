import styles from './PokemonPage.module.css';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { PokemonContext } from '../../context/PokemonContext';
import { useContext } from 'react';
import { faChevronLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const PokemonPage = () => {
  const { globalPokemons, pokemon, theme } = useContext(PokemonContext);
  const pokem = globalPokemons[pokemon];

  return (
    <div className='app'>
      <div className='app-container'>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }} className={theme}>
          <div className={styles.card_front}>
            <div className={styles.card_nav}>
              <Link to={'/'}>
                <FontAwesomeIcon className={styles.card_back} icon={faChevronLeft} />
              </Link>
              <h2>{pokem?.name}</h2>
              <FontAwesomeIcon className={styles.card_fav} icon={faStar} />
            </div>
            <img className={styles.pokemon_img} src={pokem?.sprites.other['official-artwork'].front_default} alt='' />
          </div>
          <div className={styles.pokemon_tabs}>
            <ul className={styles.stats_titles}>
              <li>About</li>
              <li className={styles.active}>Stats</li>
              <li>Moves</li>
              <li>Evolution</li>
            </ul>
            <div className={styles.stats_wrap}>
              <ProgressBar stat={'HP'} done={pokem?.stats[0]['base_stat'] * 1.5} />
              <ProgressBar stat={'Attack'} done={pokem?.stats[1]['base_stat'] * 1.5} />
              <ProgressBar stat={'Defence'} done={pokem?.stats[2]['base_stat'] * 1.5} />
              <ProgressBar stat={'Sp. Attack'} done={pokem?.stats[3]['base_stat'] * 1.5} />
              <ProgressBar stat={'Sp. Defence'} done={pokem?.stats[4]['base_stat'] * 1.5} />
              <ProgressBar stat={'Speed'} done={pokem?.stats[5]['base_stat'] * 1.5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonPage;
