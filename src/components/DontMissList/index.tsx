
import React from 'react'
import { observer } from 'mobx-react'
// style
import styles from './styles.module.scss'
import CategoryCard from './../CategoryCard'

//images
import offer from './../../sources/images/offer.jpg'
import unisex from './../../sources/images/unisex.jpg'
/* 
const categories = ['Special Offer', 'Unisex', 'Special Offer']
const img = [offer, unisex ] */

const DontMissList: React.FC = observer(() => {

  return (
    <div className={styles.list}>
      <div key={0} className={styles.card}>
        <CategoryCard img={offer} name={'Special Offer'}/>
      </div>
      <div key={1} className={styles.card}>
        <CategoryCard img={unisex} name={'Unisex'}/>
      </div>
      <div key={2} className={styles.card}>
        <CategoryCard img={offer} name={'Special Offer'}/>
      </div>
    </div>

  )
})

export default DontMissList