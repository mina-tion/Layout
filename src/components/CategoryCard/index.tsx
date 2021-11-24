
import React from 'react'
import { observer } from 'mobx-react'
//style
import styles from './styles.module.scss'
//components
import Button from '../Button'

interface Props {
  img: string,
  name: string,
}

const CategoryCard: React.FC<Props> = observer(({img,  name}) => {

  return (
    <div className={styles.card}>
      <img src={img} alt='Category card' className={styles.img}/>
      <div className={styles.content}>
        <h1 className={styles.name}> {name} </h1>
        <div className={styles.buttonContainer}> <Button /></div>
      </div>
    </div>

  )
})

export default CategoryCard