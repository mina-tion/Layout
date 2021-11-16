import React from 'react'
import { observer } from 'mobx-react'

// style
import styles from './styles.module.scss'
import Button from '../Button'


interface Props {
  img: string,
  caption: string[],
  description: string,
}

const Banner: React.FC<Props> = observer(({img, caption, description}) => {

  return (
      <div className={styles.banner} >
        <div className={styles.backImage}>
          <img src={img} alt='' className={styles.img} />  
        </div>

        <div  className={styles.content}>
          <div className={styles.title}> {caption[0]} <br /> {caption[1]}</div>
          <div className={styles.text}> {description} </div>
          <Button />
        </div>
       
      </div>
  )
})

export default Banner
