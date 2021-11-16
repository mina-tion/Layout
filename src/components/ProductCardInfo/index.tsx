import React from 'react'
import { observer } from 'mobx-react'

// style
import styles from './styles.module.scss'

interface Props {
  name: string,
  desc: string,
  price: string,
  oldPrice: string,
}

const ProductCardInfo: React.FC<Props> = observer(({name, desc, price, oldPrice}) => {


  return (
    <div className={styles.cardInfoBlock} >
      <div className={styles.info}>
        <div className={styles.nameText}>{name}</div>
        <div className={styles.descText}>{desc}</div>
      </div>

      <div className={styles.priceBlock}>
        <div className={styles.priceText}>{price}</div>
        <div className={styles.oldPriceText}>{oldPrice}</div>
      </div>
    </div>
  )
})

export default ProductCardInfo
