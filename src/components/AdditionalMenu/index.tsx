import React from 'react'
import {useState} from 'react'
//style
import styles from './styles.module.scss'

//components
import Search from 'components/Search';

//images
import search from 'sources/images/search.svg';
import menu from 'sources/images/menu.svg'

import { icons } from 'utils/menuIcons'


const AdditionalMenu: React.FC = () => {

  const [showSearch, setShowSearch] =  useState(false);
  
  const onHandlerClick = () => { 
    setShowSearch(!showSearch);
  }

  

  return (
      <div className={styles.menuContainer}>
        { 
          showSearch 
          ? <Search handlerClick={onHandlerClick}/>
          : null
        }
        <div className={styles.imageContainer} onClick={onHandlerClick}>
          <img src={search} alt='Search icon' className={styles.icon}/>
        </div>

        <div className={styles.deskMenuList}> 
            {icons.map((icon)=>( <img src={icon} alt='Мenu icon' className={styles.icon}/>))} 
        </div>

        <img src={menu} alt='Mobile menu icon' className={styles.mobMenu}/>
      </div>  

  )
}

export default AdditionalMenu
