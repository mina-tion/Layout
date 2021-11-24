import React from 'react'
import { observer } from 'mobx-react'

// style
import styles from './styles.module.scss'
import like from 'sources/images/like.svg'
import CardCarousel from 'components/CardCarousel';

interface Props {
  img: string[],
  saleText: string,
}

const ProductImageHolder: React.FC<Props> = observer(({img, saleText}) => {

  return (

    <div className={styles.imageHolder}> 
        <CardCarousel images={img} /> 

      <div className={styles.sale}>     
        <span className={styles.saleText}>{saleText}</span>
      </div>

      <img src={like} alt='To favorite' className={styles.like} />
    </div>

  )
})

export default ProductImageHolder
