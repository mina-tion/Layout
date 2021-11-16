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

const AdditionalMenu: React.FC = () => {

  const [showSearch, setShowSearch] =  useState(false);
  


  return (
    
  <div className={styles.menu}>
    
    {
/*       showSearch : ( <div className={styles.searchWrapper}>
        <div className={styles.searchContainer}>
          <input type="text" />
        </div>
      </div> )
      ? */
      
      
    }

    <div className={styles.imageContainer} onClick={()=>setShowSearch(!showSearch)}>
      <img src={search} alt="" className={styles.img}/>
    </div>

{/*     <div className={styles.searchWrapper}>
      <div className={styles.searchContainer}>
        <input type="text" />
      </div>
    </div> */}

    <div className={styles.fullMenu}> 
        <img src={fav} alt="" className={styles.img}/>
        <img src={basket} alt="" className={styles.img}/>
        <img src={avatar} alt="" className={styles.img}/>
        <img src={other} alt="" className={styles.img}/>
    </div>
    <img src={menu} alt="" className={styles.mobMenu}/>

</div>


  )
}

export default AdditionalMenu
