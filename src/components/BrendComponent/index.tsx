

import React from 'react'
import { observer } from 'mobx-react'
// style
import styles from './styles.module.scss'
import ThemeSwitcher from 'components/ThemeSwitcher'



const BrendComponent: React.FC = observer(() => {

  return (

  <div className={styles.brend}>
    <div className={styles.brendName}>Stone<span className={styles.blue}>Tile</span></div>
    <ThemeSwitcher />
  </div>
)
})

export default BrendComponent