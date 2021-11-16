
import React from 'react'
import { observer } from 'mobx-react'
// style
import styles from './styles.module.scss'
import Button from '../Button'

interface Props {
  img: string,
  name: string,
}

const DontMissCard: React.FC<Props> = observer(({img,  name}) => {

  return (
    <div className={styles.category}>
      <img src={img} alt="" className={styles.img}/>
      <div className={styles.info}>
        <div className={styles.name}> {name} </div>
        <Button />
      </div>
    </div>

  )
})

export default DontMissCard