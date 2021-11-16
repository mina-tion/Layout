import React from 'react'
// style
import styles from './styles.module.scss'
import moon from './../../sources/images/moon.svg'
import sun from './../../sources/images/sun.svg'

import { useState } from 'react'


const ThemeSwitcher: React.FC = () => {

  const [theme, setTheme] = useState('light');


  const switchTheme = (theme:string) => {
    document.body.removeAttribute("class");
    document.body.classList.add(theme);
    setTheme(theme);
  }

  return (
      <div className={styles.themeSwitcher}>
        <div className={`${styles.circle} ${theme ==='dark' ? styles.left : styles.right}`}></div> 
        
        <img src={moon} alt='' className={styles.moonButton} onClick={()=>switchTheme('dark')}/> 
        <img src={sun} alt='' className={styles.sunButton} onClick={()=>switchTheme('light')}/> 

      </div> 
  )
}

export default ThemeSwitcher
