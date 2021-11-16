import React from 'react'
import { observer } from 'mobx-react'

// style
import styles from './styles.module.scss'
import like from './../../sources/images/like.svg'
import CardCarousel from 'components/CardCarousel';

interface Props {
  img: string[],
  saleText: string,
}

const ProductImageHolder: React.FC<Props> = observer(({img, saleText}) => {

  return (

    <div className={styles.imageHolder}> 
        <CardCarousel img={img} /> 

      <div className={styles.sale}>     
        <div className={styles.saleText}>{saleText}</div>
      </div>

      <div className={styles.like}>     
        <img src={like} alt="" />
      </div>
    </div>

  )
})

export default ProductImageHolder
