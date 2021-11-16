import React from 'react'
import { observer } from 'mobx-react'

// style
import styles from './styles.module.scss'
import photo1 from './../../sources/images/photo1.jpg'
import photo2 from './../../sources/images/photo2.jpg'
import photo3 from './../../sources/images/photo3.jpg'

import ProductCard from 'components/ProductCard'

const ProductList: React.FC = observer(() => {

  return (

    <div className={styles.list}>
      <ProductCard img={[photo1, photo2, photo3]} saleText='-50%' name='Overhit with belt' desc={`Women's outerwear`} price='€23.99' oldPrice='€55'/>
      <ProductCard img={[photo2, photo1, photo3]} saleText='-30%' name='Overhit with belt' desc={`Women's outerwear`} price='€23.99' oldPrice='€55'/>
      <ProductCard img={[photo3, photo1, photo2]} saleText='-50%' name='Overhit with belt' desc={`Women's outerwear`} price='€23.99' oldPrice='€55'/>
      <ProductCard img={[photo2, photo1, photo3]} saleText='-50%' name='Overhit with belt' desc={`Women's outerwear`} price='€23.99' oldPrice='€55'/>
    </div>

  )
})

export default ProductList
