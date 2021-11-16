import React from 'react'
import { observer } from 'mobx-react'

// style
import styles from './styles.module.scss'

import Arrows from './../Arrows'


interface Props {
  title: string
}

const SectionTitle: React.FC<Props> = observer(({title}) => {
  return (
    
      <div className={styles.sectionTitle}>
        <div className={styles.text}>
                {title}
        </div>
        <div className={styles.arrows}>
          <Arrows />
        </div>
    </div>
  )
})

export default SectionTitle
