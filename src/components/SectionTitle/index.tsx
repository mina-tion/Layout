import React from 'react'
import { observer } from 'mobx-react'

// style
import styles from './styles.module.scss'

// components
import SwitchArrows from '../SwitchArrows'


interface Props {
  title: string
}

const SectionTitle: React.FC<Props> = observer(({title}) => {
  return (
    
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.arrows}><SwitchArrows /></div>
    </div>
  )
})

export default SectionTitle
