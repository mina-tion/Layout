import React from 'react'
import { observer } from 'mobx-react'

// style
import styles from './styles.module.scss'
import ProductCardInfo from 'components/ProductCardInfo';
import ProductImageHolder from 'components/ProductImageHolder';


interface Props {
  img: string[],
  saleText: string,
  name: string,
  desc: string,
  price: string,
  oldPrice: string,
}

const ProductCard: React.FC<Props> = observer(({img, saleText, name, desc, price, oldPrice}) => {


  return (
      <div className={styles.card}>
        <ProductImageHolder img={img} saleText={saleText} />
        <ProductCardInfo name={name} desc={desc} price={price} oldPrice={oldPrice} />
      </div>
  )
})

export default ProductCard
