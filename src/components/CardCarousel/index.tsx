import React from 'react'
import { observer } from 'mobx-react'

// style
//import styles from './styles.module.scss'

import { Carousel } from 'antd';

interface Props {
  img: string[],
}

const CardCarousel: React.FC<Props> = observer(({img}) => {

  const imgList = img.map((image, index)=>{
    return (
      <div key={index}>
        <img src={image} alt=""/>
      </div>)
  })

  return (
        <Carousel afterChange={()=>{}}>
         { imgList }
        </Carousel>
  )
})

export default CardCarousel
