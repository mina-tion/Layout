import React from 'react'
import { observer } from 'mobx-react'

// style
import styles from './styles.module.scss'

const Button: React.FC = observer(() => {

  return (
      <div className={styles.button}>
        <span className={styles.text}>Shop</span>
      </div>
  )
})

export default Button
