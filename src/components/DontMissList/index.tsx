
import React from 'react'
import { observer } from 'mobx-react'
// style
import styles from './styles.module.scss'
import Category from './../CategoryCard'

//images
import offer from './../../sources/images/offer.jpg'
import unisex from './../../sources/images/unisex.jpg'


const DontMissList: React.FC = observer(() => {

  return (
    <div className={styles.list}>
        <Category img={offer} name='Special Offer'/>
        <Category img={unisex} name='Unisex'/>
        <Category img={offer} name='Special Offer'/>
    </div>

  )
})

export default DontMissList