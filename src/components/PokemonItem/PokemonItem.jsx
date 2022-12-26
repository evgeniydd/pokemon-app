import React from 'react';
import styles from './PokemonItem.module.css';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PokemonContext } from '../../context/PokemonContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const PokemonItem = ({ id, name, img, type }) => {
  const { getItem } = useContext(PokemonContext);

  let style = '';
  if (type.length < 2) {
    style = `${styles.pokemon_item} ${type[0].type.name}`;
  } else if (type[0].type.name == 'normal') {
    style = `${styles.pokemon_item} ${type[1].type.name}`;
  } else {
    style = `${styles.pokemon_item} ${type[0].type.name}`;
  }

  return (
    <Link to='/pokemon-app/pokemon'>
      <div onClick={() => getItem(id, type)}>
        <div className={style}>
          <div className={styles.pokemon_item_left}>
            <p>{id < 10 ? `#00${id}` : id < 100 && id > 10 ? `#0${id}` : `#${id}`}</p>
            <p style={{ textTransform: 'capitalize' }}>{name}</p>
            <div className={styles.pokemon_types}>
              {type.map((item, index) => (
                <span className='' key={index}>
                  {item.type.name}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.pokemon_item_right}>
            <img className={styles.pokemon_image_min} src={img} alt={name} />
            <FontAwesomeIcon className={styles.fav_icon} icon={faStar} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PokemonItem;
