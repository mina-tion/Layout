import React from 'react'
// style
import styles from './styles.module.scss'
import classNames from 'classnames';

import search from './../../sources/images/search.svg';
import close from './../../sources/images/close.svg'

import SearchField from './../SearchField'
import SearchHistory from 'components/SearchHistory';

interface Props { 
  handlerClick?: () => void;
}

const Search: React.FC<Props> = ({handlerClick}) => {

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBox}>
        <SearchField />
        <SearchHistory />
      </div>
      <img src={close} alt="" onClick={handlerClick} className={classNames(styles.icon, styles.close)}/>
  </div>
  )
}

export default Search
