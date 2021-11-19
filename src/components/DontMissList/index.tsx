
import React from 'react'
import { observer } from 'mobx-react'
//style
import styles from './styles.module.scss'

//components
import CategoryCard from './../CategoryCard'

//images
import offer from './../../sources/images/offer.jpg'
import unisex from './../../sources/images/unisex.jpg'

const categories = [
  { id: 1,
    name: 'Special Offer',
    img: offer, },
  { id: 2,
    name: 'Unisex',
    img: unisex, },
  { id: 3,
    name: 'Special Offer',
    img: offer, },
]

const DontMissList: React.FC = observer(() => {

  const list = categories.map((item)=> (
    <div key={item.id} className={styles.card}>
        <CategoryCard img={item.img} name={item.name}/>
    </div>
  ))

  return (
    <div className={styles.list}> {list} </div>

  )
})

export default DontMissList