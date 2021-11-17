import React from 'react'
import {useState} from 'react'
// style
import styles from './styles.module.scss'
import classNames from 'classnames';

import search from './../../sources/images/search.svg';
import fav from './../../sources/images/fav.svg'
import basket from './../../sources/images/basket.svg'
import avatar from './../../sources/images/avatar.svg'
import other from './../../sources/images/other.svg'
import menu from './../../sources/images/menu.svg'
import close from './../../sources/images/close.svg'

const AdditionalMenu: React.FC = () => {

  const [showSearch, setShowSearch] =  useState(false);

  let searchBox = null; 
  if(showSearch) {
    searchBox = (
    <div className={styles.searchContainer}>
      <div className={styles.searchBox}>
        <div className={styles.inputFieldContainer}>
          <input type="text" className={styles.inputField}/>
          <img src={search} alt="" className={classNames(styles.icon, styles.search)}/>
        </div>

        <div className={styles.searchHistoryContainer}> 
          <h2 className={styles.title}><b>Resent Search</b></h2>
          <h3 className={styles.historyItem}>White Thirt</h3>
          <h3 className={styles.historyItem}>Overhit with belt</h3>

        </div>
      </div>
      <div onClick={()=>setShowSearch(!showSearch)}> 
        <img src={close} alt="" className={classNames(styles.icon, styles.close)}/>
      </div> 
    </div>)
  }
  
  return (

  <div className={styles.menu}>
    {searchBox}
    <div className={styles.imageContainer} onClick={()=>setShowSearch(!showSearch)}>
      <img src={search} alt="" className={styles.icon}/>
    </div>

    <div className={styles.fullMenu}> 
        <img src={fav} alt="" className={styles.icon}/>
        <img src={basket} alt="" className={styles.icon}/>
        <img src={avatar} alt="" className={styles.icon}/>
        <img src={other} alt="" className={styles.icon}/>
    </div>
    <img src={menu} alt="" className={styles.mobMenu}/>
  </div>  
  )
}

export default AdditionalMenu
