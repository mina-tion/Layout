import React from 'react'
import {useState} from 'react'
//style
import styles from './styles.module.scss'

//components
import Search from 'components/Search';

//images
import search from 'sources/images/search.svg';
import fav from 'sources/images/fav.svg'
import basket from 'sources/images/basket.svg'
import avatar from 'sources/images/avatar.svg'
import other from 'sources/images/other.svg'
import menu from 'sources/images/menu.svg'


const icons = [fav, basket, avatar, other];

const AdditionalMenu: React.FC = () => {

  const [showSearch, setShowSearch] =  useState(false);
  
  const onHandlerClick = () => { 
    setShowSearch(!showSearch);
  }

  let searchBox = null; 
  if(showSearch) {
    searchBox =  <Search handlerClick={onHandlerClick}/>
  }

  const iconList = icons.map((icon)=>( 
    <img src={icon} alt="" className={styles.icon}/>
  ))

  return (
      <div className={styles.menuContainer}>
        {searchBox}
        <div className={styles.imageContainer} onClick={onHandlerClick}>
          <img src={search} alt="" className={styles.icon}/>
        </div>

        <div className={styles.deskMenuList}> {iconList} </div>

        <img src={menu} alt="" className={styles.mobMenu}/>
      </div>  

  )
}

export default AdditionalMenu
