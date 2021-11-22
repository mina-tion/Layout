import React from 'react'
import classNames from 'classnames';

// style
import styles from './styles.module.scss'

// images
import close from './../../sources/images/close.svg'


interface Props { 
  text: any;
}

const SearchHistoryItem: React.FC<Props> = ({text}) => {

  return (
    <div className={styles.historyItem}>
      <h3 className={styles.text}>{text}</h3>
      <img src={close} alt="" className={classNames(styles.icon, styles.deleteButton)}/>
    </div>
  )
}

export default SearchHistoryItem
