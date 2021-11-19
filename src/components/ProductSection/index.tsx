
import React from 'react'
import { observer } from 'mobx-react'

// style
import styles from './styles.module.scss'

// components
import SectionTitle from './../SectionTitle'
import CategoryList from 'components/CategoryList'
import ProductList from 'components/ProductList'
import DontMissList from 'components/DontMissList'

interface Props {
  sectionName: string,
}

const ProductSection: React.FC<Props> = observer(({sectionName}) => {

  let list = null

  switch(sectionName){
    case 'Categories': 
      list = <CategoryList />
      break;
    case 'Trending now': 
      list = <ProductList />
      break;
    case `Don't miss`: 
      list = <DontMissList/>
      break;
  }
  return (
    <section className={styles.productSection}>
      <SectionTitle title={sectionName} />
      {list}
    </section>
  )
})

export default ProductSection