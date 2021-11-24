import React from 'react'
import { observer } from 'mobx-react'
import { Carousel } from 'antd';

// style
import styles from './styles.module.scss'


interface Props {
  images: string[],
}

const CardCarousel: React.FC<Props> = observer(({images}) => {

  return (
        <Carousel afterChange={()=>{}} className={styles.carousel}>
         { images.map((image, index)=> (<img key={index} src={image} alt='Carousel item' className={styles.img}/>)) }
        </Carousel>
  )
})

export default CardCarousel
