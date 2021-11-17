import React from 'react'
import {useState} from 'react'
// style
import styles from './styles.module.scss'

import search from './../../sources/images/search.svg';
import fav from './../../sources/images/fav.svg'
import basket from './../../sources/images/basket.svg'
import avatar from './../../sources/images/avatar.svg'
import other from './../../sources/images/other.svg'
import menu from './../../sources/images/menu.svg'
import Search from 'components/Search';

const AdditionalMenu: React.FC = () => {

  const [showSearch, setShowSearch] =  useState(false);
  
  const onHandlerClick = () => { 
    setShowSearch(!showSearch);
  }

  let searchBox = null; 
  if(showSearch) {
    searchBox =  <Search handlerClick={onHandlerClick}/>
  }

  return (
      <div className={styles.menu}>
        {searchBox}
        <div className={styles.imageContainer} onClick={onHandlerClick}>
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
