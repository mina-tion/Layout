import React from 'react'
// style
import styles from './styles.module.scss'
import classNames from 'classnames';

import search from './../../sources/images/search.svg';
import close from './../../sources/images/close.svg'

interface Props { 
  handlerClick?: () => void;
}

const SearchField: React.FC<Props> = ({handlerClick}) => {

  return (
      <div className={styles.inputFieldContainer}>
        <input type="text" placeholder='Search among millions of products' className={styles.inputField}/>
        <img src={search} alt="" className={classNames(styles.icon, styles.search)}/>
      </div>
  )
}

export default SearchField
