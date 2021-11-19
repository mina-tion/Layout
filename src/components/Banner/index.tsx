import React from 'react'
import { observer } from 'mobx-react'

//style
import styles from './styles.module.scss'

//components
import Button from '../Button'


interface Props {
  img: string,
  caption: string[],
  description: string,
}

const Banner: React.FC<Props> = observer(({img, caption, description}) => {

  return (
      <div className={styles.banner} >
        <img src={img} alt='' className={styles.img} />  

        <div  className={styles.container}>
          <h2 className={styles.title}> {caption[0]} <br /> {caption[1]}</h2>
          <p className={styles.text}> {description} </p>
          <div className={styles.buttonContainer}><Button /></div>
        </div>
      </div>
  )
})

export default Banner
