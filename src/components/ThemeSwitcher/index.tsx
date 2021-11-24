import React from 'react'
import { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStore } from 'stores'
import classNames from 'classnames';


// style
import styles from './styles.module.scss'

// images
import moon from 'sources/images/moon.svg'
import sun from 'sources/images/sun.svg'

const ThemeSwitcher: React.FC = observer(() => {

  const { themeStore } = useStore()

  useEffect(() => {
    themeStore.darkTheme ? document.body.classList.add('dark') : document.body.classList.remove('dark')
  })

  return (
      <div className={classNames(styles.themeSwitcher, !themeStore.darkTheme ? styles.switchOn : '')} onClick={()=>themeStore.changeTheme()}>
        <img src={moon} alt='Dark theme icon' className={styles.darkThemeButton} /> 
        <img src={sun} alt='Light theme icon' className={styles.lightThemeButton} /> 
      </div>
  )
})


export default ThemeSwitcher