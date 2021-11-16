import React from 'react'
import { observer } from 'mobx-react'

// style
import styles from './styles.module.scss'

import { Carousel } from 'antd';

interface Props {
  img: string[],
}

const CardCarousel: React.FC<Props> = observer(({img}) => {

  const imgList = img.map((image, index)=>{
    return (
        <img key={index} src={image} alt="" className={styles.img}/>
        )
  })

  return (
        <Carousel afterChange={()=>{}} className={styles.imageHolder}>
         { imgList }
        </Carousel>
  )
})

export default CardCarousel
