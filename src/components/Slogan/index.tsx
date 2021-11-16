import React from 'react'
import { observer } from 'mobx-react'

// style
import styles from './styles.module.scss'

const Body: React.FC = observer(() => {

  return (

    <div className={styles.sloganBlock}>
        <div className={styles.text}> 
           We've extended our returns period to 60 days
        </div>
    </div>
    
  )
})

export default Body
