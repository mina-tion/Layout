import React from 'react'

// style
import styles from './styles.module.scss'

//components
import SearchHistoryItem from 'components/SearchHistoryItem'

//utils
import { historyItems } from 'utils/searchHistory'


const SearchHistory: React.FC = () => {

  return (

    <div className={styles.searchHistoryContainer}> 
      <h2 className={styles.title}><b>Resent Search</b></h2>
      { historyItems.map((item)=>(<SearchHistoryItem text={item}/>)) }
    </div>
  )
}

export default SearchHistory
