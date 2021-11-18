import React from 'react'
// style
import styles from './styles.module.scss'
import moon from './../../sources/images/moon.svg'
import sun from './../../sources/images/sun.svg'
import store from './../../stores/theme';
import { observer } from 'mobx-react';

const ThemeSwitcher: React.FC = observer(() => {

  console.log(store.darkTheme)

  document.body.removeAttribute('class');
  if (store.darkTheme)
    document.body.classList.add('dark')

  return (
      <div className={`${styles.themeSwitcher} ${!store.darkTheme ? styles.switchOn : ""}`} onClick={()=>store.changeTheme()}>
        <img src={moon} alt='' className={styles.darkThemeButton} /> 
        <img src={sun} alt='' className={styles.lightThemeButton} /> 
      </div>
  )
})

export default ThemeSwitcher
