import React from 'react'

// style
import styles from './styles.module.scss'

//components
import SearchHistoryItem from './../SearchHistoryItem'

const historyItems = ['White Thirt', 'Overhit with belt']

const SearchHistory: React.FC = () => {

  const historyList = historyItems.map((item)=>(
    <SearchHistoryItem text={item}/>
  ))

  return (

    <div className={styles.searchHistoryContainer}> 
      <h2 className={styles.title}><b>Resent Search</b></h2>
      {historyList}
    </div>
  )
}

export default SearchHistory
