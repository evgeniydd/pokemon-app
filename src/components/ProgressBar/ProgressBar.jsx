import { useState } from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = ({ done, stat }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      maxWidth: `${done}px`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <div className={styles.progress_bar}>
      <div className={styles.progress_title}>{stat}</div>
      <div className={styles.progress}>
        <div className={styles.progress_done} style={style}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
