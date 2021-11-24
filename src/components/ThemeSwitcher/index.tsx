import React from 'react'

import store from 'stores/theme';
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

  console.log(themeStore.darkTheme)

  document.body.removeAttribute('class');
  if (store.darkTheme)
    document.body.classList.add('dark')

  return (
      <div className={classNames(styles.themeSwitcher, !store.darkTheme ? styles.switchOn : '')} onClick={()=>store.changeTheme()}>
        <img src={moon} alt='Dark theme icon' className={styles.darkThemeButton} /> 
        <img src={sun} alt='Light theme icon' className={styles.lightThemeButton} /> 
      </div>
  )
})


export default ThemeSwitcher