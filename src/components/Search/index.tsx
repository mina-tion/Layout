import React from 'react'
// style
import styles from './styles.module.scss'
import classNames from 'classnames';

import search from './../../sources/images/search.svg';
import close from './../../sources/images/close.svg'

interface Props { 
  handlerClick?: () => void;
}

const Search: React.FC<Props> = ({handlerClick}) => {

  return (
    <div className={styles.searchContainer}>
    <div className={styles.searchBox}>
      <div className={styles.inputFieldContainer}>
        <input type="text" placeholder='Search among millions of products' className={styles.inputField}/>
        <img src={search} alt="" className={classNames(styles.icon, styles.search)}/>
      </div>

      <div className={styles.searchHistoryContainer}> 
        <h2 className={styles.title}><b>Resent Search</b></h2>

        <div className={styles.historyItem}>
          <h3 className={styles.text}>White Thirt</h3>
          <img src={close} alt="" className={classNames(styles.icon, styles.deleteButton)}/>
        </div>
        <div className={styles.historyItem}>
          <h3 className={styles.text}>Overhit with belt</h3>
          <img src={close} alt="" className={classNames(styles.icon, styles.deleteButton)}/>
        </div>
      </div>
    </div>
    <div onClick={handlerClick}> 
      <img src={close} alt="" className={classNames(styles.icon, styles.close)}/>
    </div> 
  </div>
  )
}

export default Search
